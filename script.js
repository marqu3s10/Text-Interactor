var string  = document.getElementById("string");
var regex   = document.getElementById("regex")
var flag    = document.getElementById("flag");
var btn     = document.getElementById("btn");
var text    = document.getElementById("text");
var burger  = document.getElementById("burger");
var func = document.getElementById("functions")
function doRegex(){
  var s = string.value;
  var f = new RegExp(regex.value, flag.value);

  text.value = "";
  var matches = s.match(f);
  // var matches = s.split(f);

  console.log(matches);
  if(matches){
    for(match in matches){
      var m = matches[match] + "\n";
      text.value += m
    }
  }else{
    return text.value = "Not matches :(";
  }
};


function burgerIt(){
  burger.classList.toggle("active");
  func.classList.toggle("active");
  btn.classList.toggle("active");
}
// burger.addEventListener("click", burger);






// Try:
// .split
// A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
// \b(\W+)\b
