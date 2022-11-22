interface state {
    currentVal:string | null;
    firstOperand:string | null;
    currentOperand:string | null;
    secondOperand:string | null;
}

//flags:
let state: state = {
    currentVal: '',
    firstOperand: null,
    currentOperand: null,
    secondOperand: null,
};

const digits = document.querySelectorAll('.digits');

function addToCurrentVal(value){
    state.currentVal = state.currentVal + value.id;
    alert(state.currentVal);
    console.log(state.currentVal);
}

digits.forEach(digit => {
    digit.addEventListener('click', function handleClick(event) {
        console.log(state.currentVal, event);
        
        if (state.firstOperand != null) {
            state.currentVal = state.currentVal+state.firstOperand;
            state.firstOperand = null;
            console.log(state.currentVal);
            
        } else{
                addToCurrentVal(digit);
            }
        
        
  });
});

function updateFirstOperator(value){
    state.firstOperand = value.id;
        alert(state.firstOperand);
        console.log(state.firstOperand);
}

const boperators = document.querySelectorAll('.boperator');
boperators.forEach(boperator => {
    boperator.addEventListener('click', function handleClick(event) {
        console.log(state.firstOperand, event);
        updateFirstOperator(boperator);    
  });
});

const decpoint = document.getElementById('.');
decpoint.addEventListener('click', function decpointpressed(event) {
    if (state.currentVal.length === 0 ){
        state.currentVal = '0.'
    }
    else{
        if (state.currentVal.includes('.')) {
                alert('invalid')
            }
            else {
                state.currentVal = state.currentVal + '.'
            }
    }
});
const evalBtn = document.getElementById('=');


function evalClicked {
    state.currentVal = eval(state.currentVal)
    console.log(state.currentVal)
}

evalBtn.addEventListener('click', evalClicked)