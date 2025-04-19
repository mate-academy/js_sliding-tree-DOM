'use strict';

const listCollection = document.querySelectorAll('li');

for (const li of listCollection) {
  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.insertBefore(span, node);
      node.remove();
      break;
    }
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childUl = e.target.parentNode.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
