// JavaScript Document

let main = document.querySelector('main');//1 - changed querySelectorAll to querySelector dont need to select all, only one main element
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); //2 - changed documant to document

let input = document.querySelector('input');//4 - added querySelector for input


  submitButton.addEventListener('click', function(e) { //5 changed clickityclick to click for event
  e.preventDefault(); //5b - if the event does not get explicitly handled, its default action should not be taken as it normally would be
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName +  '! Thanks for stopping by!</h3>';
  main.appendChild(para);//3 change name paragraph to reflect variable name para
  body.setAttribute('class', 'meow'); 
  let newsentence = '=^..^=';
  console.log(newsentence); 
}); 


		