import time
import pandas as pd
import json
from fbprophet import Prophet
from dateutil.easter import easter

def detect_anomalies(forecast):
	forecasted = forecast[["ds", "trend", "yhat", "yhat_lower", "yhat_upper", "fact"]].copy()
	forecasted["anomaly"] = 0
	forecasted.loc[forecasted["fact"] > forecasted["yhat_upper"], "anomaly"] = 1
	forecasted.loc[forecasted["fact"] < forecasted["yhat_lower"], "anomaly"] = -1

    # anomaly importances
	forecasted["importance"] = 0
	forecasted.loc[forecasted["anomaly"] == 1, "importance"] = (forecasted["fact"] -
		forecasted["yhat_upper"]) / forecast["fact"]
	forecasted.loc[forecasted["anomaly"] == -1, "importance"] = (forecasted["yhat_lower"] -
		forecasted["fact"]) / forecast["fact"]
	
	return forecasted

def fit_predict_model(dataframe, interval_width = 0.99, changepoint_range = 0.8):
	m = Prophet(daily_seasonality = False, yearly_seasonality = False, weekly_seasonality = False,
				seasonality_mode = 'multiplicative', 
				interval_width = interval_width,
				changepoint_range = changepoint_range)
	m = m.fit(dataframe)
	forecast = m.predict(dataframe)
	forecast['fact'] = dataframe['y'].reset_index(drop = True)

	anomalies = detect_anomalies(forecast)
	return anomalies

def filtering(df):
	#dfTemp dataframe con tipo de dato con infor final
	#dfFore usado para obtener anomalías 
	final = []
	df.rename(columns={"Hora Inicio": "ds", "value": "y"},inplace = True)
	#For entre una lista de valores unicos en la col 'Variable'
	for x in range(df['Variable'].unique().size):
		#Pone el valor en tipoDato
		tipoDato = df['Variable'].unique()[x]
		#Filtra el df por tipoDato
		dfTemp = df[df['Variable'] == tipoDato]
		#hace que dfFore tenga solo 2 columnas
		dfBase = dfTemp[['ds','y']]
		# dfBase.rename(columns={"Hora Inicio": "ds", "value": "y"},inplace = True)
		#Devuelve df de forecast
		dfFore = fit_predict_model(dfBase)
		dfFore = dfFore[['ds','anomaly']]

		dfFinal = dfBase.join(dfFore.set_index('ds'), on='ds')
		dfFinal.rename(columns={"ds": "date", "y": "duration", "anomaly":"anormal"},inplace = True)
		final.append((tipoDato,dfFinal))
	return final

def parseFile():

	xls = pd.read_excel('archivo.xlsm')
	xls = xls.dropna()
	
	xls['Hora Inicio'] = xls['Hora Inicio'].str.replace('p.m.', 'PM')
	xls['Hora Inicio'] = xls['Hora Inicio'].str.replace('a.m.', 'AM')
	hours = xls['Hora Inicio']
	xls['Hora Inicio'] = pd.to_datetime(xls['Hora Inicio'], format='%d/%m/%Y %I:%M:%S %p')
	final = filtering(xls)


	data = []
	for tup_tipo in final:
		tipo = tup_tipo[0]
		df = tup_tipo[1]
		events = []
		count_anormal = 0
		for row in df.iterrows():
			date = (row[1]['date']).strftime("%Y-%m-%d")
			info = {"date":date,'duration':row[1]['duration'],'anormal':row[1]['anormal']}
			if row[1]['anormal'] == 1:
				count_anormal = count_anormal + 1
			events.append(info)
		dict_tipo = {'type':tipo, 'events':events, 'anevents':count_anormal}
		data.append(dict_tipo)

	#JSON = {'data':data}
	# with open('data.json', 'w') as outfile:
	# 	json.dump(JSON, outfile)

	return data
	
	
