'use strict';

const tree = document.querySelector('.tree');
const elements = tree.querySelectorAll('li');

elements.forEach((element) => {
  const text = element.firstChild;
  const span = document.createElement('span');

  text.replaceWith(span);
  span.append(text);
});

tree.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.tagName !== 'SPAN') {
    return;
  }

  const parentEl = clickedElement.parentElement;
  const nestedList = parentEl.querySelector('ul');

  if (!nestedList) {
    return;
  }

  if (nestedList.style.display === 'none') {
    nestedList.style.display = '';
  } else {
    nestedList.style.display = 'none';
  }
});
