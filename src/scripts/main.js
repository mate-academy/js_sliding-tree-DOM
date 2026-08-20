'use strict';

const listItems = [...document.querySelectorAll('li')];
const list = document.querySelector('.tree');

listItems.forEach((li) => {
  if (li.childNodes.length > 1) {
    const text = li.firstChild.textContent;

    li.firstChild.textContent = '';

    li.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextUlDisplay = e.target.nextElementSibling.style;

    if (nextUlDisplay.display === '' || nextUlDisplay.display === 'block') {
      nextUlDisplay.display = 'none';
    } else if (nextUlDisplay.display === 'none') {
      nextUlDisplay.display = 'block';
    }
  }
});
