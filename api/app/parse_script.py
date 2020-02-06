import time
import pandas as pd
from fbprophet import Prophet
from dateutil.easter import easter


def fit_predict_model(dataframe, interval_width = 0.99, changepoint_range = 0.8):
	m = Prophet(daily_seasonality = False, yearly_seasonality = False, weekly_seasonality = False,
				seasonality_mode = 'multiplicative', 
				interval_width = interval_width,
				changepoint_range = changepoint_range)
	m = m.fit(dataframe)
	forecast = m.predict(dataframe)
	#forecast['fact'] = dataframe['y'].reset_index(drop = True)
	forecast['fact'] = dataframe['y'].reset_index(drop = True)

	return forecast
    

def parse():

	xls = pd.read_excel("archivo.xlsm")
	xls = xls.dropna()
	
	xls['Hora Inicio'] = xls['Hora Inicio'].str.replace('p.m.', 'PM')
	xls['Hora Inicio'] = xls['Hora Inicio'].str.replace('a.m.', 'AM')
	hours = xls['Hora Inicio']
	xls['Hora Inicio'] = pd.to_datetime(xls['Hora Inicio'], format='%d/%m/%Y %I:%M:%S %p')

	# xls= xls.set_index('Hora Inicio')

	df = xls[['Hora Inicio','value']]
	df.rename(columns={"Hora Inicio": "ds", "value": "y"},inplace = True)

	forecast = fit_predict_model(df)

	print(df)
	print(forecast)

	# for row in range(xls.shape[0]):
	# 	print(row)

		

if __name__ == '__main__':
	parse()