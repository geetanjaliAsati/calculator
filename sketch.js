var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var operator = document.getElementById('operator');
var result = document.getElementById('result');
var button =  document.getElementById("btn");
var button2 = document.getElementById("btn2");

function calculate(){
  console.log(num1Input.value);
  console.log(num2Input.value);

  if(num1Input.value ==="" || num2Input.value===""){
    alert('Make sure you have selected a number');
    result.innerHTML="Please enter both numbers";
  }
  else{
    if(operator.value==='-'){
      result.innerHTML = parseInt(num1Input.value) - parseInt(num2Input.value);
    }
    else if(operator.value==="*"){
      result.innerHTML = parseInt(num1Input.value) * parseInt(num2Input.value);
    }
    else if(operator.value==="/"){
        result.innerHTML = parseInt(num1Input.value) / parseInt(num2Input.value);
        }
    else{
      result.innerHTML = parseInt(num1Input.value) + parseInt(num2Input.value);
    }
  }
}

function changeTextOfDivTag(){
  var xyz = document.getElementsByClassName('division');
  console.log(xyz);
  xyz[0].innerHTML='This is your Result';
  xyz[1].innerHTML='Thankyou for using our Calculator !';
  xyz[2].innerHTML='Have a Nice Day';
  xyz[3].innerHTML='Good Bye';
  xyz[3].style.color='red';


}