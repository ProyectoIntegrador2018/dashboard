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

### Ir a la carpeta donde se encuentre el proyecto e instalar express
```
$ npm init
$ npm install express --save
```

### Opcional : para tener una mejor eficiencia de pruebas se recomienda instalara nodemon
```
$ npm install --save-dev nodemon
$ npm install mongodb
$ npm install mongoose
```


### Para probar el servidor si se tiene instalado nodemon se tiene que usar el siguiente comando e ir al browser y entrar a la direccion localhost:3000

```
$ nodemon start
```

### Instalar MongoDB
```
$ brew install mongodb
```

### Una vez ya tienes MongoDB en tu MacOS, lo siguiente es crear el directorio donde el servidor de MongoDB guardará la información de cada base de datos. Desde la consola del sistema ejecuta:
```
$ mkdir -p /data/db
```
### Luego deberás asignar los permisos necesarios para que el servidor pueda escribir en ese directorio.
```
$ sudo chown -R `id -un` /data/db
```
