'use strict';

const listOfLi = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of [...listOfLi]) {
  const textContant = item.firstChild.textContent;

  if (item.children.length !== 0) {
    item.firstChild.remove();

    item.insertAdjacentHTML('afterbegin', `
      <span>${textContant}</span>
    `);
  }
}

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  if (e.target.tagName === 'SPAN') {
    const innerList = e.target.nextElementSibling;

    innerList.hidden = !innerList.hidden;
  }
});
