'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  tree.querySelectorAll('li:has(> ul)').forEach((li) => {
    const textNode = [...li.childNodes].find(
      (node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim(),
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.nodeValue.trim();
      textNode.replaceWith(span);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const childUl = e.target.nextElementSibling;

      if (childUl && childUl.tagName === 'UL') {
        childUl.hidden = !childUl.hidden;
      }
    }
  });
});
