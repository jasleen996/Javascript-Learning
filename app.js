var username=document.getElementById("usernom");
var passi=document.getElementById("passo");
function validation(){

	if (username.value==="admin" && passi.value==="12345"){ 
		alert("Welcome to my website!")
		window.location.href="./welcome.html"
	}
	else{
		alert("Username or Password is incorrect!");
	}
}