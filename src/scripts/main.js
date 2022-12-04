'use strict';

const list = document.querySelector('ul');
const listElements = document.querySelectorAll('li');
let clicked = false;

for (const element of listElements) {
  const newElement = document.createElement('span');

  newElement.textContent = element.childNodes[0].nodeValue;
  element.prepend(newElement);
  element.childNodes[1].remove();
}

list.addEventListener('click', action => {
  const targetElement = action.target;

  if (!targetElement.matches('span')) {
    return;
  }

  if (clicked === false) {
    targetElement.nextElementSibling.style.display = 'none';
    clicked = true;
  } else {
    targetElement.nextElementSibling.style.display = 'block';
    clicked = false;
  }
});
