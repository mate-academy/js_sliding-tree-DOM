'use strict';

const parseList = (node) => {
  const children = Array.from(node.childNodes);

  children.forEach((child) => {
    if (child.nodeType === 3) {
      const text = child.nodeValue.trim();

      if (text) {
        const span = document.createElement('span');
        const parentNode = child.parentNode;

        span.textContent = text;
        parentNode.replaceChild(span, child);

        const nextElement = span.nextElementSibling;

        if (nextElement) {
          span.addEventListener('click', (e) => {
            if (nextElement.style.display !== 'none') {
              nextElement.style.display = 'none';
            } else if (nextElement.style.display !== 'block') {
              nextElement.style.display = 'block';
            }
          });
        }
      }
    } else if (child.nodeType === 1) {
      if (child.tagName === 'LI') {
        parseList(child);
      } else if (child.tagName === 'UL') {
        parseList(child);
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  parseList(tree);
});
