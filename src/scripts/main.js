'use strict';

const list = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const elem of li) {
  if (!elem.children.length) {
    continue;
  }

  const content = elem.firstChild.textContent;

  elem.firstChild.remove();
  elem.insertAdjacentHTML('afterbegin', `<span>${content}</span>`);
}

list.addEventListener('click', (clicked) => {
  if (clicked.target.tagName === 'SPAN') {
    clicked.target.nextElementSibling.hidden
      = !clicked.target.nextElementSibling.hidden;
  }
});
