'use strict';

const allLi = document.querySelectorAll('.tree li');

allLi.forEach((li) => {
  const textNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    li.insertBefore(span, textNode);

    li.removeChild(textNode);

    span.addEventListener('click', () => {
      const childUl = li.querySelector('ul');

      if (childUl) {
        childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
      }
    });
  }
});
