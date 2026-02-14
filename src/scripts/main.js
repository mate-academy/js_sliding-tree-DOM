'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  const items = tree.querySelectorAll('li');

  [...items].forEach((item) => {
    const childList = item.querySelector(':scope > ul');

    if (!childList) {
      return;
    }

    const textNode = [...item.childNodes].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );

    if (!textNode) {
      return;
    }

    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    item.replaceChild(span, textNode);
  });

  tree.addEventListener('click', (e) => {
    const span = e.target.closest('span');

    if (!span) {
      return;
    }

    const list = span.closest('li');

    const subTree = list.querySelector(':scope > ul');

    if (!subTree) {
      return;
    }

    subTree.hidden = !subTree.hidden;
  });
}
