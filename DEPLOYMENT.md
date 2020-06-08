# Monitoreo Automatico de Indicadores - Dashboard

### Instrucciones de Instalación en sistemas operativos MacOS

### Instalar Node js y npm
```
$ sudo port install nodejs
$ sudo port install npm
```

### Instalar MongoDB
```
Seleccionar el sistema operativo y seguir las instrucciones en la siguiente liga:
https://docs.mongodb.com/manual/administration/install-community/
```

### Ir a la carpeta donde se encuentre el proyecto e instalar express, cors, config.json, mongodb y mongoose
```
$ npm init
$ npm install express --save
$ npm install cors
$ npm install config.json
$ npm install mongodb
$ npm install mongoose
```

### Opcional : para tener una mejor eficiencia de pruebas se recomienda instalara nodemon
```
$ npm install --save-dev nodemon
```

### Opcional : Si se desea instalar y usar el archivo watchfile usar el comando:

```
$ npm install pm2 -g
```


### Para probar el servidor si se tiene instalado nodemon se tiene que usar el siguiente comando e ir al browser y entrar a la direccion localhost:3000

```
$ nodemon start server.js
```
