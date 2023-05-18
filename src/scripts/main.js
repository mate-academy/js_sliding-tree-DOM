'use strict';

const list = document.querySelectorAll('li');
const array = Array.from(list);

function getAllTextNodes(element) {
  return Array.from(element.childNodes)
    .filter(node => node.nodeType === 3);
}

for (const li of array) {
  const textNodes = getAllTextNodes(li);

  textNodes.forEach(node => {
    const span = document.createElement('span');

    node.after(span);
    span.appendChild(node);
  });
}

const spanElements = document.querySelectorAll('span');

for (const span of spanElements) {
  span.addEventListener('click', (e) => {
    const children = e.target.parentNode.querySelector('ul');

    if (!children) {
      return;
    }

    if (children.style.display === 'none') {
      children.style.display = 'block';

      return;
    }

    children.style.display = 'none';
  });
}
