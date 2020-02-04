import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from fbprophet import Prophet
from fbprophet.diagnostics import cross_validation, performance_metrics
from fbprophet.plot import plot_cross_validation_metric
from matplotlib.backends.backend_pdf import PdfPages
from fbprophet.plot import plot_plotly
import plotly.offline as py
from itertools import compress  
from tkinter import *                   #Libreria de interfaz
from tkinter import filedialog          #Elementos para solicitud de archivo dentro de la interfaz
import time 
from tkinter import messagebox

root = Tk()
root.geometry("680x200")    #Dimensiones de la ventana
root.title('Detección de Anomalias')


def open():                                                                                                                         #Funcion ejecutada cuando se presione boton Browse
    global Direc                                                                                                                #Variable global para usarla fuera de la funcion
    root.filename = filedialog.askopenfilename(initialdir="/", title="Elige un archivo",
                                               filetypes=( ("Todos los archivos", "*.*"), ("Archivos CSV", "*.csv"))) #comando para iniciar la busqueda de archivo con el directorio inicial siendo el disco C,
                                                                                                              # el titulo de la ventana "Choose a File" y con los tipos de archivo permitidos excel, csv y todos
    Direc = root.filename                                                                                                       #Se guarda la variable de la direccion del archivo
    
    label_5 = Label(root, text= Direc, width="15")
    label_5.grid(row=1, column=0)
    
def popup():
    messagebox.showinfo("Error", "Todos los porcentajes deben estar entre 0 y 1")
    
def verify_pred():                                                                      #Funcion a ejecutar cuando se presione el boton RUN
    global sens                                                          #Se crean las variables de salida globales para usarlas fuera de la funcion de donde se adquieren
    global flex
    global OutputName
    global TERM
    global FREQ
    global presition
    sens = Sens.get()                                                   #Se obtienen los valores dentro de la interfaz y se guardan en las variables designadas
    flex = Flex.get()
    FREQ = FREQ1.get()
    FREQ = str(FREQ)
    OutputName = Output.get()
    TERM = Days.get()
    sens = float(sens)
    flex = float(flex)
    TERM = int(TERM)
    if (sens>1 or sens<0):
        popup()
    if (flex>1 or flex<0):
        popup()
    presition = False

def verify_prec():
    global sens  # Se crean las variables de salida globales para usarlas fuera de la funcion de donde se adquieren
    global flex
    global OutputName
    global TERM
    global FREQ
    global presition
    sens = Sens.get()  # Se obtienen los valores dentro de la interfaz y se guardan en las variables designadas
    flex = Flex.get()
    FREQ = FREQ1.get()
    FREQ = str(FREQ)
    OutputName = Output.get()
    TERM = Days.get()
    sens = float(sens)
    flex = float(flex)
    TERM = int(TERM)
    if (sens>1 or sens<0):
        popup()
    if (flex>1 or flex<0):
        popup()
    presition = True

FREQ1 = StringVar()
FREQ1.set("Horas")
Run_Prec_Button = Button(text="Obtener predicción", fg="black", bg="gray", width="15", height="2", command=verify_pred)
Run_Pred_Button = Button(text="Obtener predicción y precisión", fg="black", bg="gray", width="25", height="2", command=verify_prec)  #Crear un boton para correr el programa, con el texto "Run", letras negras fondo gris, con ancho 15 y alto 3
label_0 = Label(root, text="Dirección archivo .csv", width="20", height="3")   #Etiqueta para solicitar archivo a analizar
label_1 = Label(root, text="%Sensibilidad", width="20")                          #Etiqueta para solicitar porcentaje de sensibilidad
label_2 = Label(root, text="%Flexibilidad de tendencia", width="20")                    #Etiqueta para solicitar porcentaje de flexibilidad de la tendencia
label_3 = Label(root, text="Nombre de archivo de salida", height="3")                   #Etiqueta para solicitar nombre de archivo para crear
label_4 = Label(root, text="# a predecir")                         #Etiqueta para solicitar numero de dias a predecir

label_6 = Label(root, text="Selecciona tiempo de prediccion")
drop = OptionMenu(root, FREQ1, "Horas", "Dias")
Browse_Button = Button(text="Buscar..", command=open)                           #Boton para seleccionar archivo a analizar, comando llama a la funcion "open" cuando el boton sea presionado

Sens = StringVar()                                                              #Especificando variables para el valor ingresado en cuadro de texto
Flex = StringVar()
Days = StringVar()
Output = StringVar()
entry_1 = Entry(root, textvariable=Sens)                                                           #Espacio para ingresar texto por el usuario
entry_2 = Entry(root, textvariable= Flex)
entry_4 = Entry(root, textvariable= Days)
entry_3 = Entry(root, textvariable= Output)


label_0.grid(row=0)                                                             #Ingresando todos los elementos dentro de la interfaz y organizandolos por una guia
label_1.grid(row=0, column=1)                                                   #de filas y columnas
label_2.grid(row=0, column=2)
entry_1.grid(row=1, column=1)
entry_2.grid(row=1, column=2)
Browse_Button.grid(row=2)
label_3.grid(row=3)
label_4.grid(row=3, column=1)
Run_Pred_Button.grid(row=3, column=2)
Run_Prec_Button.grid(row=3, column=3)
entry_4.grid(row=4, column=1)
entry_3.grid(row=4)
drop.grid(row=1, column=3)
label_6.grid(row=0, column=3)

if FREQ == 'Dias':
    FREQ='D'
    daily=False
if FREQ == 'Horas':
    FREQ='H'
    daily=True
print(TERM)
 
def load (INPUT,FREQ):
    
    df = pd.read_csv(INPUT)
    df = df[['Hora Inicio', 'value']].dropna()
    df['Hora Inicio'] = df['Hora Inicio'].str.replace('p.m.', 'PM')
    df['Hora Inicio'] = df['Hora Inicio'].str.replace('a.m.', 'AM')
    hours=df['Hora Inicio']
    df['Hora Inicio'] = pd.to_datetime(df['Hora Inicio'], format='%d/%m/%Y %I:%M:%S %p')
    print(len(df))

    df = df.set_index('Hora Inicio')
    daily_df = df.resample(FREQ).mean()
    d_df = daily_df.reset_index().dropna()
    d_df.columns = ['ds', 'y']
    plt.title('Promedio de datos')
    plt.ylabel('Minutos de Falla')
    plt.xlabel('Fecha de inicio')
    fig0=plt.plot(d_df['ds'], d_df['y'])
    pp.savefig()
    plt.show()
    return(d_df,df,hours)

def predict_future (d_df,TERM,FREQ,sens,flex,daily):
    #Create an instance of the Prophet class
    m = Prophet(daily_seasonality = daily, yearly_seasonality = True, weekly_seasonality = True)#, interval_width=sens, changepoint_prior_scale = flex)

    m.fit(d_df)
    #Create a dataframe with the dates for which we want a prediction to be made
    future = m.make_future_dataframe(periods=TERM,freq=FREQ)
    #Call predict to make a prediction and store it in the forecast dataframe
    forecast = m.predict(future)
    
    for i in range(len(forecast.yhat_lower)):
        if forecast.yhat_lower[i]<0:
            forecast.yhat_lower[i]=0
        if forecast.yhat[i]<0:
            forecast.yhat[i]=0
    fig3 = m.plot(forecast)
    plt.title('Análisis de Tendencia y Predicción')
    plt.ylabel('Minutos de Falla')
    plt.xlabel('Fecha de Falla')
    #print(forecast)
    pp.savefig()
    plt.show()

    #Plot components
    fig2 = m.plot_components(forecast)
    plt.xlabel('Horas')
    pp.savefig()
    plt.show()
   
    #a= add_changepoints_to_plot(fig.gca(), m, forecast)
    return(forecast,m)

def count_anomalies (d_df,forecast):
    #Local Variable Iniciaitation
    i=0
    anomaly=0
    found_anomalies=[]
    color=np.empty(len(d_df),dtype=str)
    #For all historical data
    for i in range(len(d_df)):
        #Real Value
        fact=d_df['y'].iloc[i]
        #Uncertanty limits
        yhat_lower=forecast['yhat_lower'].iloc[i]
        yhat_upper=forecast['yhat_upper'].iloc[i]
        #Predefined Color
        color[i]='b'
        #if value outside of uncertanty area
        if fact < yhat_lower or fact > yhat_upper:
            #Anomaly color
            color[i]='r'
            #Anomaly count
            anomaly = anomaly+1
            found_anomalies.append(d_df['ds'].iloc[i])
    #Return # of anomalys and corresponding color array
    return(anomaly, color, found_anomalies)

def save_anomalies(found_anomalies,hours,df,INPUT,FREQ,OUTPUT):
    hours = pd.to_datetime(hours, format='%d/%m/%Y %I:%M:%S %p')
    for i in range(len(hours)):
        if FREQ == 'H':
            strin=str(hours.iloc[i])[:-5]+'00:00'
        elif FREQ == 'D':
            strin=str(hours.iloc[i])[:-8]+'00:00:00'
        
        hours.iloc[i]=strin

    dfObj = pd.DataFrame(found_anomalies) 
    #print(dfObj)
    total=[]
    #is_anomaly =  [False] * len(hours)
    for i in range(len(found_anomalies)):
        is_anomaly = hours==str(found_anomalies[i])
        res = list(compress(range(len(is_anomaly )), is_anomaly ))
        total.extend(res)

    #Load Data of csv file
    original = pd.read_csv(INPUT)
    #print(original)
   
    result = original.iloc[total].copy()

    result = result.set_index('Hora Inicio')
    print(len(result))
    #print(result)
    result.to_csv(OUTPUT)
    
def evaluate(m,TERM,FREQ):
    if FREQ=='H':
        HORIZON= str(TERM/2)+' hours'
        INITIAL=str(TERM*3)+' hours'
        PERIOD=str(TERM)+' hours'
    elif FREQ == 'D':
        HORIZON= str(TERM/2)+' days'
        INITIAL=str(TERM*3)+' days'
        PERIOD=str(TERM)+' days'
    df_cv = cross_validation(m, horizon=HORIZON, initial=INITIAL, period=PERIOD)
    #print(df_cv)
    df_p = performance_metrics(df_cv)
    print(df_p)
    print(sum(df_p.mape)/len(df_p))
    #plot mean absolute percent error (MAPE)
    fig5 = plot_cross_validation_metric(df_cv, metric='mape')
    pp.savefig()
    plt.show()

def sensitivity (df_p,TERM,FREQ,flex):
    i=0
    percentage=np.empty(10)
    number=np.empty(10)
    #For %values of sensitivity wanted
    for i in range(10):
        #Sensitivity %
        percentage[i]=i/10+.1
        #Model Declaretion
        m = Prophet(daily_seasonality = daily, yearly_seasonality = True, weekly_seasonality = True,interval_width=percentage[i])#, changepoint_prior_scale = flex)
        #Model Fit
        m.fit(d_df)
        #Predition period
        future = m.make_future_dataframe(periods=TERM,freq=FREQ)
        #Make forecast
        forecast = m.predict(future)
        #Obtain # of anomalies
        number[i], color, found_anomalies=count_anomalies(d_df,forecast)
    #Graph #of Anomalys VS sensityvity%
    print('Sensitivity')
    fig4=plt.plot(number, percentage);
    plt.title('Sensitivity in Trend')
    plt.ylabel('%''sensitivity')
    plt.xlabel('#Anomalias')
    pp.savefig()
    plt.show()
    #Return # of anomalies VS Sensitivity%
    return(number,percentage)

def flexibility (d_df,TERM,FREQ,sens):
    #Local Variable Inicialitation
    if FREQ=='H':
        HORIZON= str(TERM/2)+' hours'
        INITIAL=str(TERM*3)+' hours'
        PERIOD=str(TERM)+' hours'
    elif FREQ == 'D':
        HORIZON= str(TERM/2)+' days'
        INITIAL=str(TERM*3)+' days'
        PERIOD=str(TERM)+' days'
    
    i=0
    percentage=np.empty(10)
    error=np.empty(10)
    for i in range(10):
        #Sensitivity %
        percentage[i]=i/10+.1
        #Model Declaretion
        m = Prophet(daily_seasonality = daily, yearly_seasonality = True, weekly_seasonality = True, changepoint_prior_scale = percentage[i])#,interval_width=sens)
        #Model Fit
        m.fit(d_df)
        #Predition period
        future = m.make_future_dataframe(periods=TERM,freq=FREQ)
        #Make forecast
        forecast = m.predict(future)
        #EVALUATE
        df_cv = cross_validation(m,horizon=HORIZON, initial=INITIAL, period=PERIOD)
        df_p = performance_metrics(df_cv)
        #Obtain error
        error[i]=df_p['mae'].mean()
    #Graph #of Anomalys VS flexibility%
    fig6=plt.plot(error, percentage):
    plt.title('Sensitivity in Trend')
    plt.ylabel('%''Flexibility Trend')
    plt.xlabel('%''Error')
    pp.savefig()
    plt.show()

    return(error,percentage)
