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
let cantype = true;
let scientificModeFlag = false;
let operatorcount = 0;
// let firstVal:string = '';
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
        if (scientificModeFlag === true) {
            //digit input in scientific mode
            if (currentVal === '' && cantype === true) {
                addToCurrentVal(digit);
                cantype = true;
                printing(currentVal);
            }
            else {
                if (binoperator != '') {
                    currentVal = currentVal + binoperator;
                    addToCurrentVal(digit);
                    printing(currentVal);
                    binoperator = '';
                    cantype = true;
                }
                else {
                    if (cantype === true) {
                        addToCurrentVal(digit);
                        printing(currentVal);
                        cantype = true;
                    }
                }
            }
        }
        //digit inpus in simple mode 
        else {
            if (currentVal === '' && cantype === true) {
                addToCurrentVal(digit);
                cantype = true;
                printing(currentVal);
            }
            else {
                if (binoperator != '') {
                    currentVal = currentVal + binoperator;
                    addToCurrentVal(digit);
                    printing(currentVal);
                    binoperator = '';
                    cantype = true;
                }
                else {
                    if (cantype === true) {
                        addToCurrentVal(digit);
                        printing(currentVal);
                        cantype = true;
                    }
                }
            }
        }
    });
});
function updateFirstOperator(value) {
    binoperator = value.id;
    // alert(binoperator);
    console.log(value.id);
    operatorcount += 1;
}
const boperators = document.querySelectorAll('.boperator');
boperators.forEach(boperator => {
    boperator.addEventListener('click', function handleClick(event) {
        console.log(binoperator, event);
        //oparators simple mode
        if (scientificModeFlag === false) {
            if ((currentVal.includes('*') || currentVal.includes('-') || currentVal.includes('/') || currentVal.includes('+')) && cantype === true) {
                updateFirstOperator(boperator);
                evalClicked();
                binoperator = '';
                addToCurrentVal(boperator);
                printing(currentVal);
                cantype = true;
            }
            else {
                updateFirstOperator(boperator);
                printing(boperator.id);
            }
        }
        //oparators scientific mode
        if ((operatorcount == 2) && (cantype == true)) {
            updateFirstOperator(boperator);
            evalClicked();
            binoperator = '';
            addToCurrentVal(boperator);
            printing(currentVal);
            cantype = true;
        }
        else if (scientificModeFlag === true) {
            updateFirstOperator(boperator);
            printing(boperator.id);
        }
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
    // if (binoperator != ) {
    //     alert('invalid')
    // }
});
const evalBtn = document.getElementById('=');
function evalClicked() {
    currentVal = eval(currentVal);
    console.log(currentVal);
    printing(currentVal);
    binoperator = '';
    cantype = false;
    operatorcount = 0;
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
    cantype = true;
    operatorcount = 0;
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
