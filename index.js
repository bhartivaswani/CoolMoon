console.log("enter");
function msg(){
  var txt;
  if (confirm("Have a great day! Happy Shopping")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("button").innerHTML = txt;
}

function getValue() {
  var retVal = prompt("Which type of watch you like the most : ", "your choice");
  document.write("You have entered : " + retVal);  
  
}
//Redirecting the webpage 
/*function pageRedirect() {
  window.location.replace("https://aceiiitnmovienight.wordpress.com/");
}*/      
setTimeout("pageRedirect()",2000);
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
//Dom implementation
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Smart Bands"
}
function elementchange(){
  document.getElementById("heading").innerHTML='Namaste';
}
function displayDate() {
  document.getElementById("time").innerHTML = Date();
}
function mDown(obj) {
  obj.style.backgroundColor = "#ff77cd";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="linear-gradient(45deg,#87adfe,#ff77cd)";
  obj.innerHTML="Women's";
}
function colourchange(){
  document.getElementById("p2").style.color = "#ff1493";
}
function imagechange(){
  document.getElementById("image").src = "images/logo_moon.png";
}

