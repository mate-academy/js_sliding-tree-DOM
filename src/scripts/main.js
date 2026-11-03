'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((li) => {
  const subList = li.querySelector('ul');

  if (!subList) {
    return;
  }

  const textNode = li.firstChild;

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();

  li.replaceChild(span, textNode);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');

  const subList = li.querySelector('ul');

  if (subList) {
    subList.hidden = !subList.hidden;
  }
});
