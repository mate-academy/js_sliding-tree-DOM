'use strict';

const wrapTextWithSpan = (elements) => {
  elements.forEach((element) => {
    if (element.querySelector('ul') !== null) {
      element.childNodes.forEach((node) => {
        if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
          const span = document.createElement('span');

          span.textContent = node.nodeValue.trim();
          element.insertBefore(span, node);
          node.remove();
        }
      });
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('li');

  wrapTextWithSpan(elements);

  const span = document.querySelectorAll('span');

  span.forEach((title) => {
    title.addEventListener('click', () => {
      const nextElement = title.nextElementSibling;

      if (nextElement.tagName === 'UL') {
        if (nextElement.hidden) {
          nextElement.hidden = false;
        } else {
          nextElement.hidden = true;
        }
      }
    });
  });
});
