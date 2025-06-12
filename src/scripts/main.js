'use strict';

const tree = document.querySelector('.tree');

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');
  const textNode = li.firstChild;

  if (textNode && textNode.nodeType === Node.TEXT_NODE) {
    li.insertBefore(span, textNode);
    span.appendChild(textNode);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const childrenContainer = e.target.parentNode.querySelector('ul');

    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
    }
  }
});
