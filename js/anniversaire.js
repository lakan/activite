
/*Effacement des p, des images 
*/
$("#p1").hide();
$("#p2").hide();
$("#p3").hide();
$("img").hide();

//Evenements :
$("#pAh").on("click",function(){
    $("#pAh>span").remove();
    $("#p1").show();    
          });

$("#p1").on("click",function(){
    $("#p1>span").remove();
    $("#p2").show();    
          });

$("#p2").on("click",function(){
    $("#p2>span").remove();
    $("#p3").show();    
          });

$("#p3").on("click",function(){
    $("#p3>span").remove();
    $("div  > img").show();
    
        
    $("div#pAudio").html('<audio src="son/Nelson.mp3" autoplay loop></audio>')
    
          });

