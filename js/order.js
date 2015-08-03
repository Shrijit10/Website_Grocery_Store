function confirm_order(){
	var order_btn = document.getElementById("confirm");
	order_btn.setAttribute("disabled",true);
	alert("Your order has been confirmed. You will be redirected to the home page in a few seconds");
	setTimeout(function(){ window.location = "index.html";}, 2000);
}