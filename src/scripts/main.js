'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of [...list]) {
  const content = item.firstChild.textContent;

  if (item.children.length !== 0) {
    item.firstChild.remove();

    item.insertAdjacentHTML('afterbegin', `
    <span>${content}</span>
    `);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
