from flask import Flask,jsonify
from flask_cors import CORS

#Declaracion de la ubicacion del folder de descargas
UPLOAD_FOLDER = 'uploads'

#CONFIGURACION DE LA APP
app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')
app.secret_key = "secreto"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
CORS(app)