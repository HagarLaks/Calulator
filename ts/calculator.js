// interface state {
//     firstOperand:string | null;
//     currentOperand:string | null;
//     secondOperand:string | null;
//     canTypeDigit:boolean;
//     canTypeOperand:boolean;
//     canSum:boolean;
// }
// //flags:
// let state: state = {
//     firstOperand: null,
//     currentOperand: null,
//     secondOperand: null,
//     canTypeDigit: true,
//     canTypeOperand: false,
//     canSum:false,
// };
let currentVal = '';
let binoperator = '';
// //flag updading
// function stateUpdate(){
//     if(currentVal === ''){
//         state.canTypeDigit = true;
//     }
//     if (currentVal[-1].includes('+-\*')){
//         state.canTypeDigit = true;
//     }
// }
const digits = document.querySelectorAll('.digits');
function addToCurrentVal(value) {
    currentVal = currentVal + (String(value.id));
    // alert(state.currentVal);
    console.log(currentVal);
    printing(currentVal);
}
digits.forEach(digit => {
    digit.addEventListener('click', function handleClick(event) {
        console.log(currentVal, event);
        if (currentVal === '') {
            addToCurrentVal(digit);
            printing(currentVal);
        }
        else {
            if (binoperator != '') {
                currentVal = currentVal + binoperator;
                addToCurrentVal(digit);
                printing(currentVal);
                binoperator = '';
            }
            else {
                addToCurrentVal(digit);
                printing(currentVal);
            }
        }
    });
});
function updateFirstOperator(value) {
    binoperator = value.id;
    // alert(binoperator);
    console.log(value.id);
}
const boperators = document.querySelectorAll('.boperator');
boperators.forEach(boperator => {
    boperator.addEventListener('click', function handleClick(event) {
        console.log(binoperator, event);
        updateFirstOperator(boperator);
        printing(boperator.id);
    });
});
const decpoint = document.getElementById('.');
decpoint.addEventListener('click', function decpointpressed(event) {
    if (currentVal.length === 0) {
        currentVal = '0.';
        printing(currentVal);
    }
    else {
        if (currentVal.includes('.')) {
            alert('invalid');
        }
        else {
            currentVal = currentVal + '.';
            printing(currentVal);
        }
    }
});
const evalBtn = document.getElementById('=');
function evalClicked() {
    currentVal = eval(currentVal);
    console.log(currentVal);
    printing(currentVal);
    binoperator = '';
}
evalBtn.addEventListener('click', evalClicked);
let thescreen = document.getElementById("thescreen");
function printing(text) {
    thescreen.innerHTML = text;
}
function Cclicked() {
    currentVal = '';
    printing(currentVal);
    binoperator = '';
}
const cbtn = document.querySelector('#c');
cbtn.addEventListener('click', Cclicked);
function backfunc(val) {
    currentVal = currentVal.slice(0, -1);
    printing(currentVal);
}
;
let back = document.getElementById('back');
back.addEventListener('click', backfunc);
