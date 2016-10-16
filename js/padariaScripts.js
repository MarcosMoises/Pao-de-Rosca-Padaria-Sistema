function touchRosca(){
	if(document.getElementById("rosquinha").getAttribute('src') == "imgs/rosquinhaSmile.png"){
		document.getElementById("rosquinha").src = "imgs/rosquinhaPiscada.png";
	}			
}
$( document ).ready(function(){
	$(".button-collapse").sideNav();
});
