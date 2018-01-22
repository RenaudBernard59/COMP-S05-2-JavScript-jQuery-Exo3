/*
CONSIGNE : Avec l'aide de jQuery : 

1/ Nous avons une liste de texture, lorsque l'on clique sur une texture, elle s'applique au fond de la page.

2/ Lorsque l'on passe la souris sur le logo, il se déplace vers le bas.
--> fonction Animate() Cf. http://api.jquery.com/animate
*/
var bc1 = $('.bloc1')
var bc2 = $('.bloc2')
var bc3 = $('.bloc3')
var bc4 = $('.bloc4')
var bc5 = $('.bloc5')
var bc6 = $('.bloc6')






bc1.on('click', function() {
	var attribut = bc1.css('background-image');
	$('body').css('background-image', attribut);
});



