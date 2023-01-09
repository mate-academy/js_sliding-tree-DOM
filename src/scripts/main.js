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

tree.addEventListener('click', events => {
  if (events.target.className !== 'title') {
    return;
  }

  const ulToHide = events.target.nextElementSibling;

  if (ulToHide) {
    ulToHide.hidden = !ulToHide.hidden;
  }
});
