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