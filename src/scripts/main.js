'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  function wrapTextWithSpan(element) {
    const children = Array.from(element.childNodes);

    children.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = child.nodeValue.trim();
        child.parentNode.replaceChild(span, child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        wrapTextWithSpan(child);
      }
    });
  }

  const listItems = document.querySelectorAll('li');

  listItems.forEach((listItem) => {
    wrapTextWithSpan(listItem);
  });

  function toggleVisibility(e) {
    e.stopPropagation();

    const nestedUl = this.nextElementSibling;

    if (nestedUl && nestedUl.tagName === 'UL') {
      nestedUl.style.display =
        nestedUl.style.display === 'none' ? 'block' : 'none';
    }
  }

  const spans = document.querySelectorAll('li > span');

  spans.forEach((span) => {
    span.addEventListener('click', toggleVisibility);
  });
});
