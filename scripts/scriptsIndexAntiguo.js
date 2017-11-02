/*var x;
			x = $(document);
			x.ready(inicializar);

			function inicializar()
				{
					var today=new Date();
					var h=today.getHours();


					if(h >= 18){
						//console.log("night");
					    $('body').css('background-image', 'url(imagenes/fondo/ornstein2.png)');
					}
						else if(h <= 7 & h >= 0){
							//console.log("<=7");
					    	$('body').css('background-image', 'url(imagenes/fondo/ornstein2.png)');
						}
							else{
					    		//console.log("day");
					    		$('body').css('background-image', 'url(imagenes/fondo/fondo11.jpg)');
							}
						
				}*/

			
			/* Seguridad
			var entrada = prompt("Hola","");

			if (entrada==3){
				
			} else{
				$(document).ready(function() {
				$('body').hide();
				});
			}*/
			/*
			document.addEventListener('DOMContentLoaded',function(){
                                                       
                imagelist = [
                        "url('imagenes/fondo/fondo1.jpg')",
                        "url('imagenes/fondo/fondo11.jpg')",
                        "url('imagenes/fondo/fondo121.jpg')",
                        "url('imagenes/fondo/fondo21.jpg')",
                        "url('imagenes/fondo/fondo12.jpg')"
                ];
                randomimg = imagelist[ Math.floor( (Math.random() * imagelist.length ) )];
                document.getElementsByTagName("body")[0].style.backgroundImage = randomimg;
       		});
*/
			var contador = 0;

       		function cambio(n){

       			switch(n){
       				case 1:
       					color = "lightblue";
       					break;
       				case 2:
       					color = "#3CAD3A";
       					break;
       				case 3:
       					color = "#C6447F";
       					break;
       				case 4:
       					color = "#DBB146";
       					break;
       				default:
       					color = "black";
       					break;
       			}

       			superCambio = document.getElementById("webs"+n);
       			superCambio.style.borderWidth = "3px";
       			superCambio.style.borderColor = color;
       			contador = n;

       		}
       		
       		function quitar(){

       			quitarCambio = document.getElementById("webs"+contador);
       			quitarCambio.style.borderWidth = "0px";
       			 
       		}