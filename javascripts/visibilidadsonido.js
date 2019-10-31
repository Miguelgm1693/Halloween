/* funciones para mostrar / ocultar y sonar/parar */
    function show(element){
            document.getElementById(element).style.visibility="visible";
        }
        function hide(element){
            document.getElementById(element).style.visibility="hidden";
        }
        function sonar(musica){
            document.getElementById(musica).play();
        }  
        function cargar(){
            setTimeout(function(){document.getElementById("p2").style.visibility="visible";},3000);
        }
        function esconder(){
            setTimeout(function(){document.getElementById("susto").style.visibility="visible";},7000);
        }
        function esconder2(){
            setTimeout(function(){document.getElementById("araña4").style.visibility="hidden";},7000);
        }
        function sonar2(){
            setTimeout(function(){document.getElementById('risa').play();},7000)
        }