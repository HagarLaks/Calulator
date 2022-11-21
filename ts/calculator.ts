let currentVal:string = '';
let firstOperand:number;
let currentOperand:string ='';
let secondOperand:number;



// document.getElementById("1").onclick = function () { displayButtonInfo('1'); };
// let digits = document.querySelectorAll('.digits')

// function getDigits(digit:string) {
// currentVal += digits[]
// }

// for (let i = 0; i < digitsCol.length; i++) {digitsCol[i].addEventListener('click', curVal+digitsCol[i].id)};

const digits = document.querySelectorAll('.digits');

digits.forEach(digit => {
  digit.addEventListener('click', function handleClick(event) {
    console.log(currentVal, event);
    currentVal = currentVal + digit.id;
    alert(currentVal);
    console.log(currentVal);
    
  });
});
