function getTheElements(val){
  document.getElementById("a").value+=val;
}

function solve(){
  var x=document.getElementById("a").value;
  var y=eval(x);
  document.getElementById("a").value=y;
}

function clr(){
  document.getElementById("a").value=" ";
}

function percentage(){
  var p=document.getElementById("a").value;
  var y=eval(p);
  var d=y/100;
  document.getElementById("a").value=d+"%";
}

function backSpace(){
  var b=document.getElementById("a").value; 
  var c=b.substring(0,b.length-1);
  document.getElementById("a").value=c;
}

