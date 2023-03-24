'use strict';

const list = document.querySelectorAll('li');
const ul = document.querySelectorAll('ul');

list.forEach(element => {
  if ([...ul].includes(element.firstElementChild)) {
    const newHtml = `<span>${element.childNodes[0].textContent}</span>`;

    element.childNodes[0].remove();
    element.insertAdjacentHTML('afterbegin', newHtml);
  }
});

addEventListener('click', e => {
  const span = document.querySelectorAll('span');

  span.forEach(element => {
    if (element === e.target) {
      const nextElement = element.nextElementSibling;

      if (nextElement.hidden === true) {
        nextElement.hidden = false;
      } else {
        nextElement.hidden = true;
      }
    }
  });
});
