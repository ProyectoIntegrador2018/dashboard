import os
from app import app
from flask import Flask, flash, request, redirect, render_template, after_this_request, send_file, jsonify
from werkzeug.utils import secure_filename
from script import parseFile

#SET THE ALLOWED FILE EXTENSIONS HERE!
ALLOWED_EXTENSIONS = set(['csv','xlsx','xlsm'])

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
        
		return jsonify(
			success=True
		)

if __name__ == "__main__":
    app.run()