'use strict';

const root = document.querySelector('.tree');

createExpandableTree(root);

function createExpandableTree(element) {
  for (const child of element.children) {
    const innerUl = child.querySelector('ul');
    const textNode = findTextNode(child);

    if (!(innerUl && textNode)) {
      return;
    }

    const title = document.createElement('span');

    title.textContent = textNode.textContent.trim();
    textNode.replaceWith(title);

    title.addEventListener('click', () => {
      innerUl.style.display = innerUl.style.display === 'none' ? '' : 'none';
    });
    createExpandableTree(innerUl);
  }
}

function findTextNode(element) {
  for (const child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
      return child;
    }
  }

  return null;
}
