// JavaScript Document
var tAnterior = 0;

$(document).ready(function(){	
	//função acionada ao rolar documento
	$(document).on("scroll",function(){		
		//Guarda em uma variavel a altura do topo
		var topo = $(document).scrollTop();
		//Guarda em uma variavel o tamanho da página início
		var pagina = $("#inicio").height();
		
		//verifica se a altura do topo é maior do que a altura da tela e exibe menu
		if(topo >= pagina){
			//verifica se esta rolando para baixo ou cima
			if(topo > tAnterior){
				$("nav").animate({"top":topo+"px"},25);	
			}else{
				$("nav").css({"top":topo+"px"});
			}		
			tAnterior = topo;			
		}else{
			$("nav").css({"top":"0px"});
		}			
	});	
	
	$("nav ul").find("li").on("click",function(){
		var alvo = $(this).find("a").attr("href");
		var posicao = $(alvo).offset().top;
		
		//var alvo = $(this).attr("class"); ------------------Para trabalhar com classes no html
		
		$("html, body").animate({"scrollTop":posicao});
		
	});
	
});
