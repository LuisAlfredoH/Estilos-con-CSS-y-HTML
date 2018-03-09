// Estamos ejecutando la funcion, que va a
// contener todo nuestro codigo, una ves que
// el documento (el index.html) este cargado.
$(document).ready(function(){
	// Accedemos a nuestro menu (la clase) y a
	// su ves acceder a los elementos (etiqueta)
	// li que tengan el elemento a dentro.*/
	// /*Lo que hara la siguiente linea de codigo
	// es que al presionar el elemento a de la
	// lista dentro de nuestro menu, no
	// redireccione a ninguna pagina.
	$('.menu li:has(p)').click(function(e){
		e.preventDefault();
		// Si este elemento tiene la clase activado
		if ($(this).hasClass('activado')) {
		// Se realizara lo siguiente
			// Removemos la clase al elemento
			// seleccionado.
			$(this).removeClass('activado');
			// Luego al elemento p (parrafo) lo
			// escondemos con slideUp
			$(this).children('p').slideUp();
		// En caso contrario, no tiene la clase activado
		}else {
		// Se realizara lo siguiente:
		// Accedemos al elemento p (el parrafo)
		// Y con slideUp vamos a ocultarlos.
			$('.menu li p').slideUp();
			// Accedemos al elemento li
			// Y removemos la clase con removeClass
			$('.menu li').removeClass('activado');
			// Al elemento seleccionado, le agregamos
			// la clase activado
			$(this).addClass('activado');
			// Y al elemento seleccionado, sus hijos
			// que son elemento p (parrafo), los
			// mostramos con slideDown
			$(this).children('p').slideDown();
		}
	});
});