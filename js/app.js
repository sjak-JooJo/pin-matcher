function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinsString = pin +'';
    if(pinsString.length == 4){
        return pin;
    }
    else{
        console.log('Got 3 digit and calling again', pin);
        return getPin();
    }
}

function generatePin(){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if(isNaN(number)){
     if(number == 'C'){
         calcInput.value = ' ';
     }
  }
  else{
    
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
  
});