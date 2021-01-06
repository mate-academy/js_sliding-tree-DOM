'use strict';

const liElements = [...document.querySelectorAll('li')];
const itemsSpan = liElements.filter(li => li.children.length > 0);
const list = document.querySelector('.tree');

for (const item of itemsSpan) {
  const tagContent = item.firstChild.textContent;

  item.firstChild.remove();

  item.insertAdjacentHTML('afterbegin', `
    <span>${tagContent}</span>
  `);
}

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
