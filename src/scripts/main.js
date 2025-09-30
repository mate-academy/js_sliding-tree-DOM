'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  tree.querySelectorAll('li').forEach((li) => {
    const textNode = Array.from(li.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim(),
    );

    if (!textNode) {
      return;
    }

    const span = document.createElement('span');
    const value = textNode.nodeValue.trim();

    span.textContent = value;

    textNode.nodeValue = textNode.nodeValue.replace(value, '');
    li.insertBefore(span, textNode);
  });

  tree.addEventListener('click', (e) => {
    if (!e.target.closest || !e.target.closest('span')) {
      return;
    }

    const li = e.target.closest('li');

    if (!li) {
      return;
    }

    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
});
