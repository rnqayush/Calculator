var screenElement=document.querySelector("#sc");
var buttons=document.querySelectorAll("button");
var screenValue="";
for(item of buttons){
  item.addEventListener("click", function()
{
    var value=this.innerHTML;
    evaluation(value);
})
}
function evaluation(value){
  if(value==='AC'){
    screenValue="";
    screenElement.value=screenValue;
  }
  else if(value==='='){
    screenElement.value=eval(screenValue)
  }
  else{
    screenValue+=value;
    screenElement.value=screenValue;
  }
}
