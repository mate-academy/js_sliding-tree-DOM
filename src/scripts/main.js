'use strict';

const ulElem = document.querySelector('.tree');

function wrapListItems(listElem) {
  for (const child of listElem.children) {
    if (child.nodeName === 'LI') {
      if (child.children.length) {
        const span = document.createElement('span');
        const textChild = child.childNodes[0];

        span.textContent = textChild.textContent;
        textChild.replaceWith(span);

        const innerUL = child.querySelector('ul');

        wrapListItems(innerUL);
      }
    }
  }
}

wrapListItems(ulElem);

ulElem.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.tagName === 'SPAN') {
    const listElem = clickedElement.nextSibling;

    if (listElem.style.display === 'none') {
      listElem.style.display = 'block';
    } else {
      listElem.style.display = 'none';
    }
  }
});
