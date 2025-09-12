'use strict';

const headers = document.querySelectorAll('li');

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

const spans = document.querySelectorAll('span');

spans.addEventListener('click', (e) => {
  for (const child of e.target.children) {
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else {
      child.style.display = 'none';
    }
  }
});
