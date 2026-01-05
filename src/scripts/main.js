'use strict';

const ulTree = document.querySelector('.tree');

WrapTextWithSpan();

ulTree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const parentSelected = e.target.closest('li');

    const childUL = parentSelected.querySelector('ul');

    if (childUL) {
      childUL.style.display = childUL.style.display === 'none' ? null : 'none';
    }
  }
});

function WrapTextWithSpan() {
  ulTree.querySelectorAll('li').forEach((li) => {
    li.childNodes.forEach((childNode) => {
      const childTextContent = childNode.textContent.trim();

      if (childNode.nodeType === Node.TEXT_NODE && childTextContent.length) {
        const span = document.createElement('span');

        span.textContent = childTextContent;
        childNode.replaceWith(span);
      }
    });
  });
}
