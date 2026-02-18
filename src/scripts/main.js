'use strict';

const tree = document.querySelector('.tree');

function initTree() {
  if (!tree) {
    return;
  }

  const listItems = tree.querySelectorAll('li');

  listItems.forEach((list) => {
    const nestedList = list.querySelector(':scope > ul');

    if (!nestedList) {
      return;
    }

    const span = document.createElement('span');

    span.classList.add('tree__title');

    while (list.firstChild !== nestedList) {
      span.appendChild(list.firstChild);
    }

    list.insertBefore(span, nestedList);
  });

  tree.addEventListener('click', (e) => {
    const span = e.target.closest('.tree__title');

    if (!span || !tree.contains(span)) {
      return;
    }

    const nestedList = span.nextElementSibling;

    if (nestedList && nestedList.tagName === 'UL') {
      nestedList.hidden = !nestedList.hidden;
    }
  });
}

initTree();
