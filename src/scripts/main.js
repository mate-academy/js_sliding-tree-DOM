'use strict';

const mainList = document.querySelector('.tree');
const lists = [...document.querySelectorAll('.tree ul')];
const items = lists.map(list => list.parentElement);

items.map(item => {
  const firstText = item.firstChild.textContent.trim();

  item.firstChild.remove();

  item.insertAdjacentHTML('afterbegin', `
    <span class="tree__branch">${firstText}</span> 
  `);
});

mainList.addEventListener('click', (e) => {
  const target = e.target;

  if (!target.classList.contains('tree__branch')) {
    return;
  }

  const ulHide = target.parentElement.querySelector('ul');

  (ulHide.hidden)
    ? ulHide.hidden = false
    : ulHide.hidden = true;
});
