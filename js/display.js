function blink(){
	document.getElementById("login").style.color = "white";
    setTimeout("unblink()",500);
 }
 function unblink(){
	document.getElementById("login").style.color = "red";
    setTimeout("blink()",500);
 }