'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const childUl = item.querySelector('ul');

  if (childUl) {
    const span = document.createElement('span');
    const textNode = Array.from(item.childNodes).find((n) => n.nodeType === 3);

    if (textNode) {
      span.textContent = textNode.textContent.trim();
      item.insertBefore(span, childUl);
      item.removeChild(textNode);
    }

    span.addEventListener('click', () => {
      childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
    });
  }
});
