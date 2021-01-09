'use strict';

const items = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of items) {
  if (item.querySelector('ul')) {
    const listHeaderSpan = `<span>${item.childNodes[0].nodeValue}</span>`;

    item.removeChild(item.firstChild);
    item.insertAdjacentHTML('afterbegin', listHeaderSpan);
  }
}

tree.addEventListener('click', evt => {
  if (evt.target.tagName === 'SPAN') {
    const nestedList = evt.target.nextElementSibling;

    nestedList.hidden = !nestedList.hidden;
  }
});
