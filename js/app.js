function getPin(){
    const pin= Math.round(Math.random()*10000);
    const pinString=pin + "";
    if(pinString.length==4){
      return pin;
    }
    else{
       // console.log("got 3 digit and calling again",pin);
        return getPin();
    }
}
function generatePin(){
   const pin= getPin();
   document.getElementById("display-pin").value=pin;
}
 
//  =============================================
document.getElementById("key-pad").addEventListener("click",function(event){
    const number = event.target.innerText;
    const calcInput= document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number=="C"){
            calcInput.value="";
        }
        else if(number=="<"){
          const calcInputString= calcInput.value +'';
           calcInputArrayLikeObject=calcInputString.split('');
           calcInputArrayLikeObject.pop();
          const calcInputRemaining =calcInputArrayLikeObject.join('');
          calcInput.value=calcInputRemaining;
       }
    }
   else{
    const previousNumber=calcInput.value;
    const newNumber=previousNumber+number;
    calcInput.value=newNumber;
   }
});
//  =============================================
 function verifyPin(){
  const pin = document.getElementById("display-pin").value;
  const typedNumbers= document.getElementById("typed-numbers").value;
  const successMessage= document.getElementById("notify-success");
  const errorFailMessage=document.getElementById("notify-fail");
  let count=0;
  if(pin==typedNumbers){
    successMessage.style.display="block";
    errorFailMessage.style.display="none";
  }
   else{
    errorFailMessage.style.display="block";
    successMessage.style.display="none";
  } 
} 

