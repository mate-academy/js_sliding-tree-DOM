'use strict';

const items = [...document.querySelectorAll('.tree li')];

items.map((item) => {
  const list = item.querySelector('ul');

  if (list) {
    const textNode = item.firstChild;
    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    item.insertBefore(span, textNode);
    item.removeChild(textNode);

    span.addEventListener('click', () => {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
    });
  }
});
