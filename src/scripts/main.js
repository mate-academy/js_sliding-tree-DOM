'use strict';

// write code here
document.addEventListener('DOMContentLoaded', function () {
  const tree = document.querySelector('.tree');
  const allLi = tree.querySelectorAll('li');

  for (const li of allLi) {
    const childUl = li.querySelector('ul');

    if (!childUl) {
      continue;
    }

    const textNode = Array.from(li.childNodes).find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
    );

    if (!textNode) {
      continue;
    }

    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    li.insertBefore(span, textNode);
    li.removeChild(textNode);

    span.style.cursor = 'pointer';

    span.addEventListener('click', () => {
      childUl.hidden = !childUl.hidden;
    });
  }
});
