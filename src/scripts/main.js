'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const ul = li.querySelector('ul');

  if (ul) {
    for (const node of li.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = node.textContent.trim();
        li.replaceChild(span, node);
        break;
      }
    }
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.closest('li');
    const ul = li.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
