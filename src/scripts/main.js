'use strict';

const tree = document.querySelector('.tree');

function createWrapToUl() {
  if (tree.hasChildNodes) {
    addSpanToLI(tree.firstElementChild);
  }
}

function addSpanToLI(elem) {
    let elemIn = elem;
    while (elemIn) {
        if (elemIn.tagName === 'LI' && elemIn.childNodes.length > 1) {
            const elTx = elemIn.firstChild;
            const spanTag = document.createElement('span');

            elemIn.insertBefore(spanTag, elTx);
            spanTag.append(elTx);
            addSpanToLI(elemIn.firstChild);
        } else if (elemIn.tagName === 'UL') {
            elemIn = elemIn.firstChild;
        }
        elemIn = elemIn.nextElementSibling;
    }
}

tree.addEventListener('click', e => {
  const item = e.target;

  if (item.closest('span')) {
    const parentItems = item.parentNode;
    const parentCh = parentItems.childNodes;

    for (let i = 0; i < parentCh.length; i++) {
      if (parentCh[i].tagName === 'UL') {
        parentCh[i].hidden = !parentCh[i].hidden;
      }
    }
  }
});

createWrapToUl();
