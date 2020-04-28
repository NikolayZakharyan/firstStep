/*
let answer = [];
let space = ' ';
answer[0] = space + prompt('Answer 1');
answer[1] = space + prompt('Answer 2');
alert(answer);
*/


/*
let answer = ["name", "lastname"],
    questions = [];
  
answerCount = answer.length;

let i = 0;
do {
    questions[i] = prompt(answer[i]);
    i ++;
} while (i < 2);

for ( i = 0; i < answerCount; i++){
    questions[i] = prompt(answer[i], '');
};

document.write(questions);
console.log(questions);
console.log(typeof questions);
*/


/*
if (age < 18) {
    alert('sorry you are not adult');
} else {alert('All is correct')};
*/
;
/*
switch (parseInt(age)) {
    case 18:
        alert('Im 18 year old');
        break;
    case 100:
        alert('Im 100000 year old');
        break;
    default:
        alert('You are not 18 and 100');
}
*/

let numberOne =parseInt(prompt('Number one')),
    simbolCalc = prompt('Simbol here'),
    numberTwo =parseInt(prompt('Nmber two'));

function adding(){
   result = numberOne + numberTwo;
   console.log(result);
}
function minusing(){
    result = numberOne - numberTwo;
    console.log(result);
}
function multyplying(){
    result = numberOne * numberTwo;
    console.log(result);
}
function spliting(){
    result = numberOne / numberTwo;
    console.log(result);
}

console.log('REsult is - ');
 switch (simbolCalc)  {
     case '+':
        adding();
        break;
     case '-':
        minusing()
        break;
     case '*':
        multyplying();
        break;
     case '/':
        spliting()
        break;
    default:
        console.log('Something wrong');
        break;
 }

 console.log('ALL RESULT + - / * ');

 adding();
 minusing();
 spliting();
 multyplying();




