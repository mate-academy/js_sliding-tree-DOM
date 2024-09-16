'use strict';

const list = document.querySelectorAll('li');

list.forEach((li) => {
  const textNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE,
  );

  if (textNode) {
    const span = document.createElement('span');
    span.textContent = textNode.textContent;
    li.replaceChild(span, textNode);

    span.addEventListener('click', () => {
      const childNodes = Array.from(li.childNodes).filter(
        (node) => node.nodeType === Node.ELEMENT_NODE && node !== span,
      );

      childNodes.forEach((node) => {
        if (node.style.display === 'none') {
          node.style.display = 'block';
        } else {
          node.style.display = 'none';
        }
      });
    });
  }
});
