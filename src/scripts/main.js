'use strict';

const li = document.querySelectorAll('li');

li.forEach((one) => {
  const textNode = one.firstChild;

  if (textNode) {
    const span = document.createElement('span');

    one.insertBefore(span, textNode);
    span.appendChild(textNode);
  }
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const foundUl = e.target.parentNode.querySelector('ul');

    if (foundUl) {
      foundUl.hidden = !foundUl.hidden;
    }
  }
});
