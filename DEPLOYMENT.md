# Monitoreo Automatico de Indicadores - Dashboard 

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