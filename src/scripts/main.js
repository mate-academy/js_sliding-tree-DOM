'use strict';

const textlist = document.querySelector('.tree').innerText;
const itemList = document.querySelectorAll('li');

const textListArray = textlist.split('\n');

for (const item of itemList) {
  item.insertAdjacentHTML('afterbegin', `
  <span>${textListArray[0]}</span>
  `);

  textListArray.shift();
}

const spanList = document.querySelectorAll('span');

for (const item of spanList) {
  const siblingElement = item.nextSibling;

  siblingElement.nextSibling.remove();

  item.addEventListener('click', (event) => {
    const targetElement = event.target;

    if (targetElement.nextElementSibling.hidden === false) {
      targetElement.nextElementSibling.setAttribute('hidden', true);
    } else {
      targetElement.nextElementSibling.removeAttribute('hidden');
    }
  });
}
