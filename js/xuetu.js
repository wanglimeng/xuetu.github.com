

(function (){
	var swiper_prev= document.getElementsByClassName('swiper-button-prev');
	var swiper_next = document.getElementsByClassName('swiper-button-next');
	var swiper_container= document.getElementsByClassName("swiper-container");
	
	swiper_container[0].addEventListener('onmouseover',function() {
		swiper_prev[0].style.display="none";
		alert(1);
	},false);
	
})();
