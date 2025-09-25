'use strict';

const tree = document.querySelector('.tree');
const listLi = tree.querySelectorAll('li');

listLi.forEach((li) => {
  if (li.querySelector('ul')) {
    for (const node of li.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();

        node.replaceWith(span);
      }
    }
  }
});

if (tree) {
  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const target = e.target;

      target.classList.toggle('off');

      const child = target.nextElementSibling;

      if (target.classList.contains('off')) {
        child.style.display = 'none';
      } else {
        child.style.display = 'block';
      }
    }
  });
}
