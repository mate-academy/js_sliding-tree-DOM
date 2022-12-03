'use strict';

const tree = document.querySelector('.tree');
const listOfUl = document.querySelectorAll('ul');

const replaceTextWithSpan = (list) => {
  for (const item of list) {
    if (item.previousSibling.nodeValue.trim().length > 0) {
      const parentItem = item.parentElement;
      const nodeToDeleted = parentItem.firstChild;
      const listHeader = parentItem.removeChild(nodeToDeleted).nodeValue;
      const spanElement = document.createElement('span');

      spanElement.innerText = listHeader;
      parentItem.prepend(spanElement);
    }
  }
};

replaceTextWithSpan(listOfUl);

tree.addEventListener('click', e => {
  if (e.target.nodeName === 'SPAN') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
