'use strict';

const listAll = document.querySelectorAll('li');

for (const head of listAll) {
  if (head.querySelector('ul')) {
    let content = '';

    for (let i = 0; i < head.childNodes.length; i++) {
      const node = head.childNodes[i];

      if (node.nodeType === Node.TEXT_NODE) {
        content += node.textContent;
        head.childNodes[i].remove();
      }
    }

    const span = document.createElement('span');

    span.append(content);
    head.prepend(span);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (target) {
    if (target.nextSibling.style.display === 'none') {
      target.nextSibling.style.display = 'block';
    } else {
      target.nextSibling.style.display = 'none';
    }
  }
});
