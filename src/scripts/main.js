'use strict';

// write code here
const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

document.addEventListener('DOMContentLoaded', createSpan);
tree.addEventListener('click', hideElement);

function createSpan() {
  for (const li of list) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

function hideElement(e) {
  e.preventDefault();

  const hiddenElement = e.target.parentNode.querySelector('ul');

  if (e.target.tagName === 'SPAN' && hiddenElement) {
    hiddenElement.hidden = !hiddenElement.hidden;
  }
}
