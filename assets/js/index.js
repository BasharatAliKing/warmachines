var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}


AOS.init();

// sidebar

var side=document.getElementById('side');
var togle=document.getElementById('togle');
 var header=document.querySelector('#header');

side.remove();
//togle.onclick=function(){
 
  //header.appendChild(side);

  

//}