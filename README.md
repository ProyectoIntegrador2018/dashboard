# Monitoreo Automatico de Indicadores - Dashboard 

Dashboard para visualizar distintos fallos en plantas de Ternium.

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


### Environment URLS

* **Production** - [TBD](TBD)
* **Development** - [TBD](TBD)

### !UXperts

| Name           | Email             | Role        |
| -------------- | ----------------- | ----------- |
| Victor Hugo Oyervides Covarrubias | a01382836@itesm.mx | Product Owner Proxy |
| Lazaro Kawer Oreamuno | a00821300@itesm.mx | Administrador de Proyecto |
| Andres Fernando Martinez Rangel | a00817465@itesm.mx | Scrum Master |
| Alejandro Alfredo Salgado Gaspar | a00513221@itesm.mx | Administrador de Configuración |

### Management tools

* [Github repo](https://github.com/ProyectoIntegrador2018/dashboard)
* [Backlog](https://github.com/ProyectoIntegrador2018/dashboard/issues)
* [Heroku](https://crowdfront-staging.herokuapp.com/)
* [Documentation](https://drive.com)

## Stack Tecnologico

| Technology               | Version     | 
| ------------------ | ----------------- | 
| Python | 3.7.4 |    
| Flask | 1.1.1 | 
| ChartJS | 2.9.3 | 
| MongoDB | 4.2.2 | 
| Bootstrap | 3.3 | 
| JQuery | 3.4.1 | 

## Development

### Setup the project

## Instrucciones de Instalación para sistemas operativos Ubuntu 18.04

Se necesita instalar las siguientes herramientas

### Instalar Python


```
$ sudo apt-get update
$ sudo apt-get install python3
```

Verifica que se haya instalado la versión indicada en el READ.me, o una mayor con el siguiente comando:

```
$ python3 --version
```

Estos comandos instalarán pip3 automáticamente.

### Instalar Flask

```
$ pip3 install Flask
```

Verifica que se haya instalado la versión indicada en el READ.me, o una mayor con el siguiente comando:

```
python3 -m flask --version
```

### Instalar MongoDB

```
$ sudo apt-get install -y mongodb-org
```

## Instrucciones de Instalación para sistemas operativos MacOS Catalina

### Instalar Homebrew

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Instalar Python

```
$ brew install python3
```

Verifica que se haya instalado la versión indicada en el READ.me, o una mayor con el siguiente comando:

```
$ python3 --version
```

### Instalar MongoDB

En caso de que exista una versión de MongoDB más antigua a la indicada en el READ.md, ejecutar:

```
$ brew services stop mongodb
$ brew uninstall mongodb
$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
```

Si no existe ninguna versión de MongoDB, ejecutar:

```
$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
```

### Para ejecutar el programa

```
En la terminal, ejecutar el comando para abrir la shell de MongoDB: $ mongo 
Ejecutar el comando que crea la base de datos o si ya está creada, la abre: $ use dashboard
En otra terminal dentro del directorio de la aplicación, ejecutar el comando para correr el backend de la aplicación: $ python3 main.py.
En Google Chrome, dirigirse a la dirección: localhost:5000/ 
```