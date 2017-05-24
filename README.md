# AlzheimerGamesServices
___

## Diseño e implementación de una plataforma genérica para el desarrollo de aplicaciones de e-Health y m-Health 

## Aplicación desplegada:
http://alzheimergameservices.herokuapp.com

## API REST

Tipo de datos manejado:  ***JSON***

### Recursos

El API ofrece el siguiente recurso principal:

- persona

Este se puede usar así:

### Componentes de los recursos

| Recurso | Metodo | Descripción | Parametro | Retorno |
| :------ | :----- | :---------- | :-------- | :------ |
| `/persona/` | **GET** | Retorna todas las personas (Pacientes, Profesionales de saalud e investigadores) registradas. | | **List \<DataPOJO>** |
| `/persona/` | **POST** | Guarda una persona nueva. | **DataPOJO** | |
| `/persona/` | **PUT** | Actualiza la información de una persona registrada. | **DataPOJO** | |
| `/persona/{personaId}/` | **GET** | Retorna el recurso de persona específicado por el id| **Long** | **DataPOJO** |
| `/persona/` | **POST** | Guarda la información de un juego nuevo para un paciente registrado. | **TextPlainValue** | |


### Parametros de URL

| Nombre | Tipo | Descripción |
| :----- | :--- | :---------- |
| *personaId* | **Long**| Número de identificación de la persona o paciente. |

### Forma de datos

#### Person

	{	
		"id":Long,
		"name":String,
		"password":String,
		"role":String,
		"edad":Integer,
		"avancesJuegos":List<AvanceJuego>,
		"diagnosticos":List<Diagnostico>,
	}

#### AvanceJuego
  
  	{
		"id":Long,
		"nombreJuego":String,
		"tiempoSegundos":String,
		"numeroPreguntasIntentos":String,
		"numeroPreguntasAciertos":String,
		"nivelMaximoAlcanzado:String,
		"date":Date
  	}
  
#### Diagnostico

  	{
		"id":Long,
		"title":String,
		"descripcion":String,
		"date":Date,
  	}

_______

### Manual de descarga, instalación y despliegue de la aplicación
_______

Para realizar el proceso es necesario contar previamente con:
- git (descarga en https://git-scm.com/downloads)
- maven (descarga en https://maven.apache.org/download.cgi)
- bower (descarga en https://bower.io/#install-bower)
- heroku (descarga en https://devcenter.heroku.com/articles/heroku-cli)
- Tener una cuenta activa en Heroku y en GitHub

_______

#### Descarga de la aplicación

Para descargar la aplicación siga estas instrucciones:

1. Abrir el repositorio de la aplicación en GitHub. (https://github.com/AlejandraZamora/AlzheimerGamesServices.git)

2. Copiar el enlace para clonar el proyecto

3. Abrir la terminal y ubicarse en el directorio en donde se desea guardar el proyecto con el comando cd:
	- cd Directorio deseado

4. Una vez ubicados en el directorio deseado procedemos a clonar el proyecto con el comando git clone y la dirección copiada anteriormente en la página del repositorio:
	- git clone https://github.com/AlejandraZamora/AlzheimerGamesServices.git

#### Ejecutar el proyecto de manera local

1. para poder ejecutar el proyecto vamos a utilizar el comando de maven para compilarlo y después de este el comando para correrlo:
	- mvn compile
	- mvn spring-boot:run
Debemos ubicarnos en el directorio del proyecto:
	- cd AlzheimerGamesServices/

2. Para probar el funcionamiento de la aplicación abrimos en el browser la dirección:
	- http://localhost:8080/app/index.html

3. Para detener el servidor volvemos a la terminal en la que se encuentra corriendo el proyecto y oprimimos ctrl+c lo que detendrá el proceso.

#### Despliegue de la aplicación en Heroku

1. Entrar a la página de heroku (https://www.heroku.com/) e iniciar sesión, escoger la opción de crear una nueva aplicación y poner el nombre que deseamos.

2. Crear una nueva carpeta en la que se va a crear el proyecto para desplegar, para esto nos ubicamos en el directorio deseado y creamos la carpeta desde la terminal:
	- cd DirectorioDeseado
	- mkdir NombreCarpeta

3. En la carpeta creada se deben copiar los archivos del repositorio (https://github.com/AlejandraZamora/AlzheimerGamesServices.git) a excepción de la carpeta .git, el archivo README.md y el archivo .gitignore que se encuentran en el directorio raíz del proyecto.

4. Abrir la terminal y ubicarnos en el directorio de la carpeta creada antes con el comando cd:
	- cd DirectorioProyecto

5. Iniciar sesión en la cuenta de heroku con el comando:
	- heroku login

6. Crear un nuevo repositorio en GitHub y conectarlo con heroku:
	- git init
	- heroku git:remote -a NombreDeMiAplicación (nombre de la aplicación creada en el paso 1)

7. Si desea realizar cambios en el proyecto puede realizarlos ahora.

8. Después de realizar los cambios se debe hacer commit de los mismos en el nuevo repositorio:
	- git add .
	- git commit -am "Descripción del commit"
	
9. Desplegar la aplicación en heroku:
	- git push heroku master

10. Para acceder a la aplicación desplegada nos dirijimos al link https://NombreDeMiAplicación.herokuapp.com/

_______
