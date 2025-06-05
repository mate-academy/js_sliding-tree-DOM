'use strict';

const tree = document.querySelector('.tree');
const listTree = tree.querySelectorAll('li');

listTree.forEach((li) => {
  const firstTextNode = li.firstChild;
  const nestedList = li.querySelector('ul');

  if (nestedList) {
    nestedList.style.display = 'none';
  }

  if (firstTextNode && firstTextNode.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = firstTextNode.textContent;
    firstTextNode.remove();
    li.insertBefore(span, li.firstChild);

    span.addEventListener('click', (e) => {
      e.stopImmediatePropagation();

      if (nestedList) {
        if (nestedList.style.display === 'none') {
          nestedList.style.display = 'block';
        } else {
          nestedList.style.display = 'none';
          hideAllNestedLists(nestedList);
        }
      }
    });
  }
});

function hideAllNestedLists(ul) {
  const nestedUls = ul.querySelectorAll('ul');

  nestedUls.forEach((subUl) => {
    subUl.style.display = 'none';
  });
}
