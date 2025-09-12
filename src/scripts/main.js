'use strict';

const headers = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const header of headers) {
  if (header.childNodes.length > 1) {
    for (const node of header.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim().length !== 0) {
        const span = document.createElement('span');

        span.textContent = node.textContent;

        node.replaceWith(span);
      }
    }
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const parentElem = e.target.parentNode;

    for (const child of parentElem.children) {
      if (child.tagName === 'UL') {
        if (child.style.display === 'none') {
          child.style.display = 'block';
        } else {
          child.style.display = 'none';
        }
      }
    }
  }
});
