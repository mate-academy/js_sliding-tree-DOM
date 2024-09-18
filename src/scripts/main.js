'use strict';

function wrapNodesInSpan(element) {
  Array.from(element.childNodes).forEach((node) => {
    if (
      node.nodeType === Node.TEXT_NODE &&
      node.textContent.trim().length > 0
    ) {
      const span = document.createElement('span');

      span.className = 'header';
      span.textContent = node.textContent;
      node.parentNode.replaceChild(span, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      wrapNodesInSpan(node);
    }
  });
}

const tree = document.querySelector('.tree');

wrapNodesInSpan(tree);

const headers = document.querySelectorAll('span.header');

headers.forEach((header) => {
  header.addEventListener('click', function (newEvent) {
    const nextElement = header.nextElementSibling;

    if (
      nextElement &&
      (nextElement.tagName === 'UL' || nextElement.tagName === 'OL')
    ) {
      const isHidden = nextElement.style.display === 'none';

      if (isHidden) {
        nextElement.style.display = 'block';
      } else {
        nextElement.style.display = 'none';
      }
    }
    newEvent.stopPropagation();
  });
});
