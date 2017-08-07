var page = require('page');
var main = document.getElementById("contenido");


page('/presentacion', function(ctx, next){
	main.height = '600px'	
	main.src = '/presentacion'
})

page('/instalacion', function(ctx, next){
	main.height = '1550px'
	main.src = '/instalacion'
})

page('/componentes', function(ctx, next){
	main.src = '/componentes'
})

page('/directorios', function(ctx, next){
	main.src = '/directorios'
})

page('/variables', function(ctx, next){
	main.src = '/variables'
})

page('/potencialminero', function(ctx, next){
	main.height = '600px'
	main.src = '/potencialminero'
})

page('/consideraciones', function(ctx, next){
	main.src = '/consideraciones'
})

page('/tutorial', function(ctx, next){
	main.height = '600px'
	main.src = '/tutorial'
})

page();

var elems = document.querySelectorAll('.collection-item');

function makeActive() {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    this.classList.add('active');
};


for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('click', makeActive);