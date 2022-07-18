'use strict';

const lis = document.querySelectorAll('.tree li');

for (const li of lis) {
  const text = li.firstChild;

  li.insertAdjacentHTML('afterbegin', `
    <span class="title">${li.firstChild.nodeValue}</span>
  `);
  text.remove();
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  if (e.target.className !== 'title') {
    return;
  }

  const ulToHide = e.target.nextElementSibling;

  if (ulToHide) {
    ulToHide.hidden = !ulToHide.hidden;
  }
});
