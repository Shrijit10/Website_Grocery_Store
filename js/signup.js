function validate(){
  var user_name = document.getElementById("user_name");
  var pass = document.getElementById("inputPassword");
	
	if(user_name.value != "" && pass.value != ""){
	  var welcome   = document.getElementById("welcome");
	  var login_btn = document.getElementById("login");
	  var reg_link  = document.getElementById("reg_link");
		
	  user_name.setAttribute("disabled",true);
	  pass.setAttribute("disabled",true);
	  login_btn.setAttribute("disabled",true);
	  reg_link.setAttribute("disabled",true);
		
	  var name = user_name.value+"";
	  var firstLetter = name.substring(0,1).toUpperCase();
	  var remLetters = name.substring(1).toLowerCase();
	  name = firstLetter+remLetters;
		
	  welcome.innerHTML = "Welcome "+name+"!";
	  alert("Welcome back, "+name+"! You will be redirected to the home page in a few seconds");
		
	  setTimeout(function(){ window.location = "index.html";}, 2000);	
	}
	 
}

function validate1(){
	var fname = document.getElementById("reg_fname");
	var lname = document.getElementById("reg_lname"); 
	var email = document.getElementById("reg_email");
	var pass = document.getElementById("reg_pass");
	var pass1 = document.getElementById("reg_pass1");
	var sub_btn = document.getElementById("reg_submit");
	
	if(fname.value == ""){
	  alert("Please enter your First Name");
	  return;
	}
	if(lname.value == ""){
	  alert("Please enter your Last Name");
	  return;
	}
	if(email.value == ""){
	  alert("Please enter your Email Id");
	  return;
	}
	if(pass.value == ""){
	  alert("Please enter your Password");
	  return;
	}
	if(pass1.value == ""){
	  alert("Please confirm your password");
	  return;
	}
	
	if(pass.value!=pass1.value){
	  alert("Password in the confirmation field does not match the password");
	  return;
	}
	
    var welcome = document.getElementById("welcome");
	
	
	fname.setAttribute("disabled",true);
	lname.setAttribute("disabled",true);
	email.setAttribute("disabled",true);
	pass.setAttribute("disabled",true); 	
	pass1.setAttribute("disabled",true);
	sub_btn.setAttribute("disabled",true);
	
	var name = fname.value+"";
	var firstLetter = name.substring(0,1).toUpperCase();
	var remLetters = name.substring(1).toLowerCase();
	name = firstLetter+remLetters;
	
	welcome.innerHTML = "Welcome "+name+"!";
	alert(name+", your account has been successfully created!. You will be redirected to the home page in a few seconds");
	
	setTimeout(function(){ window.location = "index.html";}, 2500);
	  
}


function getRegForm(){
	var par = document.getElementById("sign_in_form");

	while(par.firstChild)
	  par.removeChild(par.firstChild);
	
	divFName = document.createElement("div");
	divFName.setAttribute("class","form-group");
	
	divFNameCol = document.createElement("div");
	divFNameCol.setAttribute("class","col-xs-10");
	
	inFName = document.createElement("input");
	inFName.setAttribute("id","reg_fname");
	inFName.setAttribute("type","text");
	inFName.setAttribute("placeholder","First Name");
	inFName.setAttribute("class","form-control");
	inFName.setAttribute("required","");
	
	divFNameCol.appendChild(inFName);
	divFName.appendChild(divFNameCol);
	
	
	//--------------------------------------------------
	
	divLName = document.createElement("div");
	divLName.setAttribute("class","form-group");
	
	divLNameCol = document.createElement("div");
	divLNameCol.setAttribute("class","col-xs-10");
	
	inLName = document.createElement("input");
	inLName.setAttribute("id","reg_lname");
	inLName.setAttribute("type","text");
	inLName.setAttribute("placeholder","Last Name");
	inLName.setAttribute("class","form-control");
	inLName.setAttribute("required","");
	
	divLNameCol.appendChild(inLName);
	divLName.appendChild(divLNameCol);
	
	//------------------------------------------
	
	divEmail = document.createElement("div");
	divEmail.setAttribute("class","form-group");
	
	divEmailCol = document.createElement("div");
	divEmailCol.setAttribute("class","col-xs-10");
	
	inEmail = document.createElement("input");
	inEmail.setAttribute("id","reg_email");
	inEmail.setAttribute("type","email");
	inEmail.setAttribute("placeholder","Email");
	inEmail.setAttribute("class","form-control");
	inEmail.setAttribute("required","");
	
	divEmailCol.appendChild(inEmail);
	divEmail.appendChild(divEmailCol);
	
   //--------------------------------------------------------
   
   	divPass = document.createElement("div");
	divPass.setAttribute("class","form-group");
	
	divPassCol = document.createElement("div");
	divPassCol.setAttribute("class","col-xs-10");
	
	inPass = document.createElement("input");
	inPass.setAttribute("id","reg_pass");
	inPass.setAttribute("type","password");
	inPass.setAttribute("placeholder","Password");
	inPass.setAttribute("class","form-control");
	inPass.setAttribute("required","");
	
	divPassCol.appendChild(inPass);
	divPass.appendChild(divPassCol);
	
	//----------------------------------------
	divPass1 = document.createElement("div");
	divPass1.setAttribute("class","form-group");
	
	divPassCol1 = document.createElement("div");
	divPassCol1.setAttribute("class","col-xs-10");
	
	inPass1 = document.createElement("input");
	inPass1.setAttribute("id","reg_pass1");
	inPass1.setAttribute("type","password");
	inPass1.setAttribute("placeholder","Confirm Password");
	inPass1.setAttribute("class","form-control");
	inPass1.setAttribute("required","");
	
	divPassCol1.appendChild(inPass1);
	divPass1.appendChild(divPassCol1);
	
	//---------------------------------------------
	
	divB = document.createElement("div");
	divB.setAttribute("class","form-group");
	
	divBCol = document.createElement("div");
	divBCol.setAttribute("class","col-xs-10");
	
	inButton = document.createElement("a");
	inButton.setAttribute("id","reg_submit");
	inButton.addEventListener("click",validate1);
	inButton.setAttribute("role","button");
	inButton.setAttribute("class","btn btn-md btn-primary");
	inButton.innerHTML = "Submit";
	
	
	divBCol.appendChild(inButton);
	divB.appendChild(divBCol);
	
	par.appendChild(divFName);
	par.appendChild(divLName);
	par.appendChild(divEmail);
	par.appendChild(divPass);
	par.appendChild(divPass1);
	par.appendChild(divB);
	
}