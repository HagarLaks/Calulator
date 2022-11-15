// document.getElementsByid('darkmode').addEventListener('click')
//  = function() {displayButtonInfo(id)};

function displayButtonInfo(value){
    alert(value)
}

document.getElementById("clock").onclick = function() {displayButtonInfo('clock')};
document.getElementById("darkmode").onclick = function() {displayButtonInfo('darkmode')};
document.getElementById("root").onclick = function() {displayButtonInfo('root')};
document.getElementById("cloud").onclick = function() {displayButtonInfo('cloud')};
document.getElementById("back").onclick = function() {displayButtonInfo('back')};

document.getElementById("c").onclick = function() {displayButtonInfo('c')};
document.getElementById("1").onclick = function() {displayButtonInfo('1')};
document.getElementById("2").onclick = function() {displayButtonInfo('2')};
document.getElementById("3").onclick = function() {displayButtonInfo('3')};
document.getElementById("4").onclick = function() {displayButtonInfo('4')};
document.getElementById("5").onclick = function() {displayButtonInfo('5')};
document.getElementById("6").onclick = function() {displayButtonInfo('6')};
document.getElementById("7").onclick = function() {displayButtonInfo('7')};
document.getElementById("8").onclick = function() {displayButtonInfo('8')};
document.getElementById("9").onclick = function() {displayButtonInfo('9')};
document.getElementById("0").onclick = function() {displayButtonInfo('0')};
document.getElementById("+").onclick = function() {displayButtonInfo('+')};
document.getElementById("-").onclick = function() {displayButtonInfo('-')};
document.getElementById("/").onclick = function() {displayButtonInfo('/')};
document.getElementById("X").onclick = function() {displayButtonInfo('X')};
document.getElementById(".").onclick = function() {displayButtonInfo('.')};
document.getElementById("=").onclick = function() {displayButtonInfo('=')};
document.getElementById("0").onclick = function() {displayButtonInfo('0')};
document.getElementById("+-").onclick = function() {displayButtonInfo('+-')};






// const element = document.getElementById("clock");


// element.addEventListener('click', ()=> {
//     alert(element.textContent);
// })


document.getElementById("info").onclick = function() {myFunction()};

function myFunction() {
    alert('Hagar Laks\n Version 0.0.1\n My Calculator');


}
