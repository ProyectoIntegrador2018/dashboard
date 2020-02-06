import time
import pandas as pd
from fbprophet import Prophet
from dateutil.easter import easter

def detect_anomalies(forecast):
	forecasted = forecast[["ds", "trend", "yhat", "yhat_lower", "yhat_upper", "fact"]].copy()
    # forecast['fact'] = df['y']

	forecasted["anomaly"] = 0
	forecasted.loc[forecasted["fact"] > forecasted["yhat_upper"], "anomaly"] = 1
	forecasted.loc[forecasted["fact"] < forecasted["yhat_lower"], "anomaly"] = -1

    # anomaly importances
	forecasted["importance"] = 0
	forecasted.loc[forecasted["anomaly"] == 1, "importance"] = (forecasted["fact"] - forecasted["yhat_upper"]) / forecast["fact"]
	forecasted.loc[forecasted["anomaly"] == -1, "importance"] = (forecasted["yhat_lower"] - forecasted["fact"]) / forecast["fact"]
	
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
	for x in range(df['Variable'].unique().size): #For entre una lista de valores unicos en la col 'Variable'
		tipoDato = df['Variable'].unique()[x] #Pone el valor en tipoDato
		dfTemp = df[df['Variable'] == tipoDato] #Filtra el df por tipoDato

		dfBase = dfTemp[['ds','y']] #hace que dfFore tenga solo 2 columnas
		# dfBase.rename(columns={"Hora Inicio": "ds", "value": "y"},inplace = True)
		dfFore = fit_predict_model(dfBase) #Devuelve df de forecast
		dfFore = dfFore[['ds','anomaly']]

		dfFinal = dfBase.join(dfFore.set_index('ds'), on='ds')
		final.append({tipoDato:dfFinal})
	return final


def parse():

	xls = pd.read_excel("archivo.xlsm")
	xls = xls.dropna()
	
	xls['Hora Inicio'] = xls['Hora Inicio'].str.replace('p.m.', 'PM')
	xls['Hora Inicio'] = xls['Hora Inicio'].str.replace('a.m.', 'AM')
	hours = xls['Hora Inicio']
	xls['Hora Inicio'] = pd.to_datetime(xls['Hora Inicio'], format='%d/%m/%Y %I:%M:%S %p')
	final = filtering(xls)

	print(final)
		

if __name__ == '__main__':
	parse()