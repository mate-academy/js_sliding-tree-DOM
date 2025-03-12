'use strict';

const tree = document.querySelector('.tree');
const liElements = document.querySelectorAll('li');

liElements.forEach((liElement) => {
  const isHeader = liElement.children.length > 0;

  if (isHeader) {
    const headerText = [...liElement.childNodes].find((node) => {
      const isTextNode = node.nodeType === 3;
      const isNotSpaceSymbol = node.textContent.trim().length > 0;

      return isTextNode && isNotSpaceSymbol;
    });

    if (headerText) {
      const span = document.createElement('span');

      span.textContent = headerText.textContent.trim();
      headerText.replaceWith(span);
    }
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    slideTree(e);
  }
});

function slideTree(e) {
  const currentSpan = e.target;
  const parentLi = currentSpan.parentElement;
  const ulElement = parentLi.querySelector('ul');

  if (ulElement) {
    ulElement.hidden = !ulElement.hidden;
  }
}
