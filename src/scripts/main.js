'use strict';

function handleClickedSpan(e) {
  const siblingList = e.target.nextElementSibling;

  if (siblingList) {
    siblingList.style.display =
      siblingList.style.display === 'none' ? 'block' : 'none';
  }
}

function addInteractiveHeaders(list) {
  const { children: listElements } = list;

  [...listElements].forEach((listElement) => {
    if (list.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = listElement.firstChild.textContent;
      listElement.firstChild.textContent = '';
      listElement.prepend(span);

      span.addEventListener('click', handleClickedSpan);

      listElement.querySelectorAll('ul').forEach(addInteractiveHeaders);
    }
  });
}

const tree = document.querySelector('.tree');

addInteractiveHeaders(tree);
