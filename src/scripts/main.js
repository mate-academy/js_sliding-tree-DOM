'use strict';

const list = document.querySelector('ul');
const listElements = document.querySelectorAll('li');
const clickedElements = {};

for (const element of listElements) {
  const newElement = document.createElement('span');
  const header = element.childNodes[0].nodeValue;

  clickedElements[header] = false;
  newElement.textContent = header;
  element.prepend(newElement);
  element.childNodes[1].remove();
}

list.addEventListener('click', action => {
  const targetElement = action.target;
  const targetHeader = targetElement.childNodes[0].nodeValue;

  if (!targetElement.matches('span')) {
    return;
  }

  if (clickedElements[targetHeader] === false){
    targetElement.nextElementSibling.style.display = 'none';
    clickedElements[targetHeader] = true;
  } else {
    targetElement.nextElementSibling.style.display = 'block';
    clickedElements[targetHeader] = false;
  }
});
