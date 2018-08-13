(function(){
  var r = /\d{3}/;
  console.log(r); // /\d{3}/
  console.log(r.test("hello")); //false
  console.log(r.test(123)); // true
  console.log(r.test("ABC123")); // true (bad)

  var r = /^\d{3}$/;
  console.log(r.test(123)); // true
  console.log(r.test("ABC123")); // false (good)
});

(function(){
  // .MATCH
  var s = "unicorns and rainbows and Vegan Cupcakes";
  var r = /unicorn/;
  console.log(s.match(r)); // ["unicorn"]

  var r = /\w+/;
  console.log(s.match(r)); // ["unicorns"]

  // Flags: g -> global; i -> case insensitive
  var r = /\b[a-z]+\b/;
  console.log(s.match(r)); // ["unicorns", "and", "rainbows",...]
});

(function (){
  // .EXEC (same as .match, but whit global flag also return the groups)
  var s = "Here is are two numbers 111-2222 and 444-5555";
  var r = /(\d{3})[-.]\d{4}/g;

  console.log(r.exec(s));
  console.log(r.exec(s));
});

(function(){
  // .PLIT
  var s = "Hey, I am testind the .split method";
  // var r = /[\s,]+/;
  var r = /(\W)/; // split rememering the regrex
  console.log(s.split(r));
})();

(function(){
// .REPLACE
  // var s = "unicorns and rainbows and Vegan Cupcakes";
  // var r = /\b\w{6,}\b/g;
  // console.log(s.replace(r, "kittens"));

  // var r = /([aeiou])/g;
  // console.log(s.replace(r, "$1$1"));

/////////////////////////////

  // var s = "unicorns and rainbows and Vegan Cupcakes";
  // var r = /\b\w+\b/g;
  //
  // var result = s.replace(r, replacer);
  // console.log(result);
  //
  // function replacer(match){
  //   // console.log(match);
  //   if (match.length == 8){
  //     return match.toUpperCase();
  //   } else {
  //     return match;
  //   }
  //   return "blueberry";
  // }

////////////////////////////

  var s = "My number is 999-3828, and 393-8333.";
  var r = /(\d{3})-(\d{4})/g;

  var result = s.replace(r, replacer);

  function replacer(match, g1, g2){
    console.log(match);
    console.log(g1);
    console.log(g2);
  }

})();


var string  = document.getElementById("string");
var regex   = document.getElementById("regex")
var flag    = document.getElementById("flag");
var btn     = document.getElementById("btn");
var text    = document.getElementById("text");

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
}

btn.addEventListener("click", doRegex);


// Try:
// .split
// A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun.
// \b(\W+)\b
