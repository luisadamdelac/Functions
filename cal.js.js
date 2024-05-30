function addition (p1, p2){
    return Number(p1) + Number(p2);
}

function addition1 () {
    let isboss=confirm("Are you the boss?");
if(isboss==true){
     alert("welcome boss!");
}
else { alert ("get lost!");
}
let num1= document.getElementById('add1').value;
let num2= document.getElementById('add2').value;
let result= addition (num1, num2);
document.getElementById('sum').value = result;
}

function subtraction (p1, p2){
    return Number(p1) - Number(p2);
}
function substraction1 (){
let num1= document.getElementById('sub1').value;
let num2= document.getElementById('sub2').value;
let result= subtraction (num1, num2);
document.getElementById('sum1').value = result;
}
function multiplication (p1, p2){
    return Number(p1) * Number(p2);
}
function multiplication1 (){
let num1= document.getElementById('mul1').value;
let num2= document.getElementById('mul2').value;
let result= multiplication (num1, num2);
document.getElementById('sum2').value = result;

}
function division (p1, p2){
    if (Number(p2) === 0){
        return 'ERROR';
    } else {
        return Number(p1) / Number (p2);
    }
    
}
function division1 (){
let age =prompt("How old are you?");
alert(age);
let num1= document.getElementById('div1').value;
let num2= document.getElementById('div2').value;
let result= division (num1, num2);
document.getElementById('sum3').value = result;
}