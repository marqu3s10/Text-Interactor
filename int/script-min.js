function doRegex(){var e=string.value,t=new RegExp(regex.value,flag.value);text.value="";var n=e.match(t);if(console.log(n),!n)return text.value="Not matches :(";for(match in n){var o=n[match]+"\n";text.value+=o}}!function(){var e=/(\W)/;console.log("Hey, I am testind the .split method".split(e))}(),function(){function e(e,t,n){console.log(e),console.log(t),console.log(n)}var t="My number is 999-3828, and 393-8333.",n=/(\d{3})-(\d{4})/g,o=t.replace(n,e)}();var string=document.getElementById("string"),regex=document.getElementById("regex"),flag=document.getElementById("flag"),btn=document.getElementById("btn"),text=document.getElementById("text");btn.addEventListener("click",doRegex);