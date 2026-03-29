'use strict';

// write code here
const classTree = document.querySelector('.tree');
const arrLi = [...classTree.querySelectorAll('li')];

arrLi.forEach((currObj) => {
  const currChild = currObj.children.length;
  const currChildText = currObj.firstChild;
  const childCleanText = currChildText.textContent.trim();

  if (currChild > 0 && currChildText.nodeType === 3) {
    const span = document.createElement('span');
    const ul = currObj.querySelector('ul');

    span.append(childCleanText);
    currObj.replaceChild(span, currChildText);
    ul.hidden = false;
  }
});

classTree.addEventListener('click', (listHeader) => {
  const targetSpan = listHeader.target.closest('span');

  if (!targetSpan) {
    return;
  }

  const siblingEl = targetSpan.nextElementSibling;

  if (!siblingEl) {
    return;
  }

  siblingEl.hidden = !siblingEl.hidden;
});
