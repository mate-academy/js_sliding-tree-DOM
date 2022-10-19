'use strict';

const mainList = document.querySelector('.tree');
const subLists = [...document.querySelectorAll('li')].filter(
  el => el.firstElementChild
);

subLists.forEach(el => {
  const span = document.createElement('span');
  const listHeader = [...el.childNodes][0];

  listHeader.after(span);
  span.appendChild(listHeader);
  listHeader.nodeValue = listHeader.nodeValue.trim();
});

mainList.addEventListener('click', (clickEvent) => {
  const target = clickEvent.target;

  if (!target.matches('span')) {
    return;
  }

  const subList = target.nextElementSibling;
  const hidden = subList.style.display === 'none';

  if (hidden) {
    subList.style.display = 'block';
    target.style.fontWeight = 'normal';
  } else {
    subList.style.display = 'none';
    target.style.fontWeight = 'bold';
  }
});
