
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "binhquangkhanhit12" && password == "bo3acquy"){
  alert ("Login successfully");
  window.location.href = "home/home-index.html"; // Redirecting to other page.
  }
  else{
  alert ("incorect password or name");
  }}