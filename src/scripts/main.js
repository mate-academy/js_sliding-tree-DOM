'use strict';

function wrapHeaderIntoSpan(parentElement) {
  Array.from(parentElement).forEach((child) => {
    if (child.querySelector('ul')) {
      const span = document.createElement('span');
      const childText = child.firstChild;

      span.textContent = childText.textContent.trim();
      child.replaceChild(span, childText);

      wrapHeaderIntoSpan(child.querySelectorAll('ul > li'));
    }
  });
}

const treeChildren = document.querySelectorAll('.tree > li');

wrapHeaderIntoSpan(treeChildren);

const spans = document.querySelectorAll('span');

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const list = span.nextSibling;

    if (list) {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
    }
  });
});
