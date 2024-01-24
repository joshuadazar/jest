let DOM = {
  num1: '#num1',
  num2: '#num2',
  result: '#result',
  btnCalculate: '#btnCalculate',
}

let num1 = document.querySelector(DOM.num1)
let num2 = document.querySelector(DOM.num2)
let result = document.querySelector(DOM.result)
let btnCalculate = document.querySelector(DOM.btnCalculate)

function sum(a=0, b=0) {
  console.log(a,b)
  if (a == undefined || b == undefined) {
    return 0
  } else {
    result.innerHTML= Number(a) + Number(b)
    return a + b;
  }
}

btnCalculate.addEventListener('click', ()=>sum(num1.value, num2.value))

module.exports = sum