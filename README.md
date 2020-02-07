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

http://sal.muchogas.com:8080


### !UXperts

| Name           | Email             | Role        |
| -------------- | ----------------- | ----------- |
| Victor Hugo Oyervides Covarrubias | a01382836@itesm.mx | Product Owner Proxy |
| Lazaro Kawer Oreamuno | a00821300@itesm.mx | Administrador de Proyecto |
| Andres Fernando Martinez Rangel | a00817465@itesm.mx | Scrum Master |
| Alejandro Alfredo Salgado Gaspar | a00513221@itesm.mx | Administrador de Configuración |

### Management tools

* [Github repo](https://github.com/ProyectoIntegrador2018/dashboard)
* [Backlog](https://github.com/ProyectoIntegrador2018/dashboard/projects/1)
* [Documentation](https://drive.com)

## Stack Tecnologico

| Technology               | Version     | 
| ------------------ | ----------------- | 
| Python | 3.7.4 |    
| Flask | 1.1.1 | 
| ChartJS | 2.9.3 | 
| MongoDB | 4.2.2 | 
| Materialize | 1.0.0 | 
| JQuery | 3.4.1 | 

## Development

### Setup the project

### Instrucciones de Instalación para sistemas operativos Ubuntu 18.04 o Debian 9 +

### Eliminar viejas versiones de docker


```
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```

### Instalar Dependencias de Docker

```
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

```

### Agregar llave GPG del repositorio de docker
```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

### Verificar el fingerprint

```
$ sudo apt-key fingerprint 0EBFCD88
    
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]

```

### Agregar el repositorio

```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### Instalar el engine de Docker

```
$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose
```

### Consutrir los contenedores 
se tiene que estar dentro del directorio raiz del repositorio

```
$ sudo docker-compose build
```
Podra tardar un tiempo ...

### Levantar los contenedores

```
$ sudo docker-compose up
```

En Google Chrome, dirigirse a la dirección: localhost:8080

