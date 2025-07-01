'use strict';

const ul = [...document.querySelectorAll('ul')];

for (const list of ul) {
  const li = list.parentElement;
  const nodes = [...li.childNodes];

  for (const node of nodes) {
    if (node.nodeType === 3 && node.textContent.trim() !== '') {
      const span = document.createElement('span');
      span.textContent = node.textContent.trim();

      li.replaceChild(span, node);
      break;
    }
  }
}

const headers = [...document.querySelectorAll('span')];

for (const header of headers) {
  header.addEventListener('click', () => {
    const ulElement = header.nextElementSibling;

    if (!ulElement) return;

    if (ulElement.style.display === 'none') {
      ulElement.style.display = '';
    } else {
      ulElement.style.display = 'none';
    }
  });
}
