import os
from app import app
from flask import Flask, flash, request, redirect, render_template, after_this_request, send_file, jsonify
from werkzeug.utils import secure_filename
from script import parseFile
import pymongo 
from bson.json_util import dumps

#SET THE ALLOWED FILE EXTENSIONS HERE!
ALLOWED_EXTENSIONS = set(['csv','xlsx','xlsm'])

#MONGO CONFIG GOES HERE!
myclient = pymongo.MongoClient('mongodb://db:27017')
mydb = myclient["dashboard"]
mycol = mydb["dashboard"]

#Function to check if the file has a valid extension
def allowed_file(filename):
	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

#Function to check if we have post data
def verifyPOSTData(request):
	if 'file' not in request.files:
		return "File not found!"
	return None

#Function to check the file
def verifyFile(file):
	if not file:
		return "File not found!"
	if file.filename == '':
		return "File not found!"
	if not allowed_file(file.filename):
		return "File not allowed!"
	return None

#App routes
#STATIC ROUTES!
#ROOT RUTE
@app.route('/')
def index_route():
	return render_template('home.html')
#FALLA DETAIL ROUTE
@app.route('/DetallesFalla')
def detail_route():
	return render_template('failure_details.html')

#Route to upload the files to the server
@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        # Check if we have the post data required to upload the file
        if verifyPOSTData(request):
            return jsonify( 
                error=True, 
                description=verifyPOSTData(request) 
            )
        file = request.files['file']
        #Check the file
        if verifyFile(file):
            return jsonify( 
                error=True, 
                description=verifyFile(file)
            )
        #Conseguir el nombre y el directorio del archivo
        filename = secure_filename(file.filename)
        fileLocationAndName = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(fileLocationAndName)
        #Call the script to parse the file data into a MongoDB document
        response = parseFile(fileLocationAndName)
        x = mycol.insert_one(response[0])
        return jsonify(response[1])
    
#Route to get all the data
@app.route('/all-data', methods=['GET'])
def all_data():
    #GEt the data from the database
    result = dumps(mycol.find({}))
    return result

#Route to get one type of data
@app.route('/get-data/<type>', methods=['GET'])
def get_data(type):
    #Hacer query a la base de datos para obtener el historial de ese tipo de fallos
    result = dumps(mycol.find({'type': type }))
    return result

#Routes to add the static pages

if __name__ == "__main__":
    app.run(use_reloader=True, threaded=True)