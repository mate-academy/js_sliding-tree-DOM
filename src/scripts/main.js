'use strict';

// write code here
const treeElement = document.querySelector('.tree');
const liElements = treeElement.querySelectorAll('li');

liElements.forEach((element) => {
  const firsChild = element.firstChild;

  if (!firsChild) {
    return;
  }

  const spanElement = document.createElement('span');

  spanElement.append(firsChild.textContent);
  firsChild.replaceWith(spanElement);
});

treeElement.addEventListener('click', (evt) => {
  if (evt.target.tagName !== 'SPAN') {
    return;
  }

  const parentElement = evt.target.parentElement;

  if (parentElement.tagName !== 'LI') {
    return;
  }

  const lastChild = parentElement.lastElementChild;

  if (lastChild.tagName !== 'UL') {
    return;
  }

  const display = lastChild.style.display;

  lastChild.style.display = display === 'none' ? 'block' : 'none';
});
