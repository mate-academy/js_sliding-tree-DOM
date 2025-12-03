'use strict';

// write code here

const allLi = document.querySelectorAll('.tree li');

for (const li of allLi) {
  if (li.querySelector('ul')) {
    const textNode = [...li.childNodes].find((node) => {
      return node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '';
    });

    const span = document.createElement('span');

    span.textContent = textNode.textContent;

    li.insertBefore(span, textNode);
    li.removeChild(textNode);

    span.addEventListener('click', (e) => {
      li.querySelector('ul').hidden = !li.querySelector('ul').hidden;
    });
  }
}
