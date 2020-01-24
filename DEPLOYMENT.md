# Monitoreo Automatico de Indicadores - Dashboard 

## Instrucciones de Instalación para sistemas operativos Ubuntu 18.04

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
