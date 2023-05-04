'use strict';

const treeElement = document.querySelector('.tree');
const nodesWithChildren = treeElement.querySelectorAll('li > ul');

[...nodesWithChildren].map(list => {
  const parents = list.parentNode;

  const spanElement = document.createElement('span');

  spanElement.innerText = parents.firstChild.textContent;

  parents.firstChild.replaceWith(spanElement);
});

treeElement.addEventListener('click', (e) => {
  const h = e.target;
  const parentSpan = h.parentElement;
  const isHide = h.classList.contains('hide');

  if (h.tagName !== 'SPAN') {
    return false;
  }

  if (isHide) {
    parentSpan.lastElementChild.style.display = 'block';
    h.classList.remove('hide');
  } else {
    parentSpan.lastElementChild.style.display = 'none';
    h.classList.add('hide');
  }
});
