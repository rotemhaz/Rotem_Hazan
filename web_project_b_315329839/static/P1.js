
var i = 0;
var text = "Are you interested in looking for a dog park near your geographic area, or in another area?";
var speed = 50;

function Typing(){
    if  (i< text.length){
        document.getElementById("page5").innerHTML +=text.charAt(i);
        i++
        setTimeout(Typing, speed);
    }
}



function wantSeeMore() {
  var x = document.getElementById("seeMore");
  if (x.style.display === "none") {
        x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }
}



function GetLocation(){
  if(navigator.geolocation){
    console.log("Thank , We Get Your Location");
    navigator.geolocation.getCurrentPosition(showPosition)
  } else{
    document.getElementById("p").innerHTML="Geolocation is not supported"
  }
}


function showPosition(position){
  var x = document.getElementById("p");
  var y =  document.getElementById("button");
  x.innerHTML="your in" <br> + position.coords.latitude;
}
