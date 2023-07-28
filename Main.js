import {roundToFive} from './RoundToFive.js';

let firstn = '';
let secondn = '';
let operator = '';
let finish = false;


const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const operators = ['/','x','+','-'];


const out = document.querySelector('.display p');

function clearAll(){
  firstn = '';
  secondn = '';
  operator = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.AC').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn')) return;      // the button is not pressed
  if (event.target.classList.contains('AC')) return;        // the 'AC' button is pressed
  if (event.target.classList.contains('percent')) return;   // the '%' button is pressed
  if (event.target.classList.contains('pozNeg')) return;    // the '+/-' button is pressed

  out.textContent = '';

  const key = event.target.textContent;  // get the pressed button

  if (numbers.includes(key)) {          // if the button from '0' to '9' or '.' is pressed
    if (secondn === '' && operator === '') {
      if (firstn.length === 6 && secondn === '' && operator === '') { out.textContent = firstn; return; } // checking the length of the entered number
      firstn += key;
      console.log(firstn, secondn, operator);
      out.textContent = firstn;

    } else if (firstn !== '' && secondn !== '' && finish) {
                if (secondn.length === 6 && !finish) { out.textContent = secondn; return; }
                secondn = key;
                finish = false;
                out.textContent = secondn;

    } else {
          if (secondn.length === 6 && !finish) { out.textContent = secondn; return; }
          secondn += key;
          out.textContent = secondn;
    }
    console.log(firstn, secondn, operator);
    return;
  }

  if (operators.includes(key)) {   // if one of the '%', '/', 'x', '+', or '-' buttons is pressed
      operator = key;
      console.log(firstn, secondn, operator)
      out.textContent = operator;
      return;
  }
  if (key === '=') {    // if the '=' button is pressed
     if (secondn === '') secondn = firstn;

    switch (operator) {
      case '+':
        firstn = (+firstn) + (+secondn);
        break;
      case '-':
        firstn = firstn - secondn;
        break;
      case 'x':
        firstn = firstn * secondn;
        break;
      case '/':
        if (secondn === '0') {
          out.textContent = 'Err';
          firstn = '';
          secondn = '';
          operator = '';
          console.log(first, secondn, operator);
          return;
        }
        firstn = firstn / secondn;
        break;
    }

    finish = true;
    console.log(firstn, secondn, operator);
    out.textContent = roundToFive(firstn);
  }
}
document.querySelector('.percent').onclick = () => { // if the '%' button is pressed
     if (firstn !== '') {
       const result = firstn * 0.01;
       out.textContent = roundToFive(result);
  }
}
document.querySelector('.pozNeg').onclick = () => {  // if the '+/-' button is pressed
      if (firstn !== '') {
      firstn = -firstn;
       out.textContent = firstn;
  }
}