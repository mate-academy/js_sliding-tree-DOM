'use strict';

const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');

liElements.forEach((li) => {
  if (li.querySelector('ul')) {
    const textNode = Array.from(li.childNodes).find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();
      li.replaceChild(span, textNode);
    }
  }
});

tree.addEventListener('click', (e) => {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'SPAN') {
    const ul = clickedEl.parentElement.querySelector('ul');

    if (ul) {
      ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
    }
  }
});
