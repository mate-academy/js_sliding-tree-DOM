'use strict';

const root = document.querySelector('.tree');
const headers = [...document.querySelectorAll('li')];

headers.forEach(element => {
  if (element.children.length > 0) {
    const span = document.createElement('span');

    span.innerText = element.firstChild.textContent;
    span.className = 'headerSpan';
    element.firstChild.replaceWith(span);
  }
});

root.addEventListener('click', (actualEvent) => {
  const groupOfElements = actualEvent.target.closest('.headerSpan');

  if (!groupOfElements || !root.contains(groupOfElements)) {
    return;
  }

  groupOfElements.nextElementSibling.hidden
  = !groupOfElements.nextElementSibling.hidden;
});
