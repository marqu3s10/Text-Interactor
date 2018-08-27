var string  = getId("string"),
    regex   = getId("regex"),
    flag    = getId("flag"),
    replace = getId("replace"),
    submit  = getId("submit"),
    text    = getId("text"),
    burger  = getId("burger"),
    func    = getId("functions"),
    currentFunc,
    matches;

function getId(name){
  return document.getElementById(name);
};

//////////////////////////////////////////////////////////

function getValues(){
  s = string.value;
  r = new RegExp(regex.value, flag.value);
  rep = replace.value;
};

function burgerIt(){
  burger.classList.toggle("active");
  func.classList.toggle("active");
  submit.classList.toggle("active");
};

function getFunc(e){
  burgerIt();
  submit.innerHTML = e + "() it!";
  currentFunc = e;


  if(currentFunc === "replace"){
    replace.classList.add("active");
  }else{
    replace.classList.remove("active");
  }
}

function display(){
  text.value = "";

  if(typeof matches == "object"){
    for(match in matches){
      var m = matches[match] + "\n";
      text.value += m
    }
  }else if(matches){
    text.value = matches;

  }else{
    return text.value = "Not matches :(";
  }
};

function doRegex(){
  getValues();

  if(!string.value || !regex.value){
    return text.value = "please write in the field!"; // <---- improve( red borders in the empty field)
  }

  switch(currentFunc){
    case "test":
      matches = r.test(s);
      break;

    case "match":
      matches = s.match(r);
      break;

    case "exec":
      matches = r.exec(s);
      break;

    case "replace":
      matches = s.replace(r, rep);
      break;

    case "split":
      matches = s.split(r);
      break;

    default:
      // popup "First select one!"
      // submit.innerHTML = ""
  }

  display();
}
