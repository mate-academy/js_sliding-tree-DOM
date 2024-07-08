'use strict';

const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');

liElements.forEach((item) => {
  const hasUlChild = item.querySelector('ul');

  if (hasUlChild) {
    const span = document.createElement('span');
    const textNode = item.firstChild;

    span.textContent = textNode.textContent.trim();
    item.insertBefore(span, textNode);
    textNode.remove();
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const nextElement = e.target.nextElementSibling;

    if (nextElement && nextElement.tagName === 'UL') {
      nextElement.hidden = !nextElement.hidden;
    }
  }
});
