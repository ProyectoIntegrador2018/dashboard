# Monitoreo Automatico de Indicadores - Dashboard

[![Maintainability](https://api.codeclimate.com/v1/badges/3ec02f76c2da348f9754/maintainability)](https://codeclimate.com/github/ProyectoIntegrador2018/dashboard/maintainability)

Dashboard para visualizar distintos tipos de fallos en plantas de Ternium. Genera gráficas con detección de anomalías por tipo de falla.

## Table of contents

* [Client Details](#client-details)
* [Environment URLS](#environment-urls)
* [!UXperts](#team)
* [Management tools](#management-tools)
* [Stack Tecnologico](#stack)
* [Setup the project](#setup-the-project)


### Client Details

| Name               | Email             | Role |
| ------------------ | ----------------- | ---- |
| Karen Alanis | c.kalani@ternium.com.mx |  Lider de Proyectos  |


### Dashboard URL

https://dashboard-tenium.herokuapp.com/dashboard


### !UXperts

| Name           | Email             | Role        |
| -------------- | ----------------- | ----------- |
| Adrián Silva Méndez | a01281337@itesm.mx | Product Owner Proxy |
| Valentín Huerta González | a01193231@itesm.mx | Administrador de Proyecto |
| Oscar Guevara Valverde | a01281577@itesm.mx | Scrum Master |
| Francisco Javier Simón Muñoz | a00818423@itesm.mx | Administrador de Configuración |

### Management tools

* [Github repo](https://github.com/ProyectoIntegrador2018/dashboard)
* [Backlog](https://github.com/ProyectoIntegrador2018/dashboard/projects/1)
* [Documentation](https://drive.google.com/drive/folders/1SSBXJN80fpIKWPhrakaUeZEwP412qnNI?usp=sharing)

## Stack Tecnologico

| Technology               | Version     |
| ------------------ | ----------------- |
| Nodejs | 12.6.0 |    
| MongoDB | 3.5.8 |
| Express | 4.17.1 |
| Highcharts | 8.1.0 |
| JQuery | 3.4.1 |
| Nodemon | 2.0.4 |
| Cors | 2.8.5 |

## Development

### Instrucciones de Instalación en sistemas operativos MacOS

### Instalar Node js y npm

```
$ sudo port install nodejs
$ sudo port install npm

```

### Instalar MongoDB
```
### Seleccionar el sistema operativo y seguir las instrucciones en la siguiente liga:

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

### Para probar el servidor si se tiene instalado nodemon se tiene que usar el siguiente comando e ir al browser y entrar a la direccion localhost:3000

```
$ nodemon start server.js
```

En Google Chrome, dirigirse a la dirección: localhost:300
