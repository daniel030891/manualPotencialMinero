
// Definir las caracteristicas de express dentro de una variable
var express = require('express');
var app = express()


// Estructura del proyecto especificada con el tipo de extension 'pug'
app.set('view engine', 'pug')


// Directorios estaticos de estilos e imagenes
app.use(express.static('public'))


// definir las url necesarias para lanzar las aplicaciones


app.get('/home', function(req, res){
	res.render("index")
})

app.get('/presentacion', function(req, res){
	res.render("presentacion")
})

app.get('/instalacion', function(req, res){
	res.render("instalacion")
})

app.get('/componentes', function(req, res){
	res.render("componentes")
})

app.get('/directorios', function(req, res){
	res.render("directorios")
})

app.get('/variables', function(req, res){
	res.render("variables")
})

app.get('/potencialminero', function(req, res){
	res.render("potencial")
})

app.get('/consideraciones', function(req, res){
	res.render("consideraciones")
})

app.get('/tutorial', function(req, res){
	res.render("tutorial")
})


// Utiliza el puerto donde se lanzara el servidor de aplicaciones
var port = 3000
app.listen(port, function(err){
	if (err){
		console.log("Se pordujo un error"), process.exit(1)
	}else{
		console.log("Iniciando Manual de Potencial Minero Metalico en el servidor: " + port)
	}
})