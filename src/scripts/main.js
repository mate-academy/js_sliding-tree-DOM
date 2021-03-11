'use strict';

const listOfLi = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of [...listOfLi]) {
  const textContant = item.firstChild.textContent;

  if (item.children.length !== 0) {
    item.firstChild.remove();

    item.insertAdjacentHTML('afterbegin', `
      <span class="wrapper">${textContant}</span>
    `);
  }
}

tree.addEventListener('click', e => {
  const spanClick = e.target.closest('.wrapper');

  if (spanClick || tree.contains(spanClick)) {
    const innerList = e.target.nextElementSibling;

    innerList.hidden = !innerList.hidden;
  }
});
