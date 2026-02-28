'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  for (const li of tree.querySelectorAll('li')) {
    const textNode = Array.from(li.childNodes).find(
      (node) => node.nodeType === 3 && node.textContent.trim(),
    );

    if (!textNode) {
      continue;
    }

    if (li.querySelector(':scope > span')) {
      continue;
    }

    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    li.insertBefore(span, textNode);
    li.removeChild(textNode);
  }

  tree.addEventListener('click', (e) => {
    const span = e.target.closest('span');

    if (!span) {
      return;
    }

    const li = span.closest('li');
    const childUl = li.querySelector(':scope >ul');

    if (!childUl) {
      return;
    }

    childUl.hidden = !childUl.hidden;
  });
});
