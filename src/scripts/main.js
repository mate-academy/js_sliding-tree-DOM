/* eslint-disable no-shadow */
'use strict';

const titles = [...document.querySelectorAll('li')].filter(
  (li) => li.childElementCount > 0,
);

function listMover(event) {
  event.stopPropagation();

  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  const parent = target.parentElement;

  if (parent.listRolled) {
    parent.lastElementChild.style = '';
    parent.listRolled = false;
  } else if (parent.listRolled === false) {
    parent.lastElementChild.style.display = 'none';
    parent.listRolled = true;
  }
}

titles.forEach((li) => {
  const span = document.createElement('span');
  const titleContent = li.firstChild.data.trim();
  const spanContent = document.createTextNode(titleContent);

  span.appendChild(spanContent);
  li.replaceChild(span, li.firstChild);
  li.listRolled = false;

  span.addEventListener('click', listMover);
});
