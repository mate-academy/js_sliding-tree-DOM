'use strict';

const list = document.querySelector('.tree');

const itemsLi = document.querySelectorAll('li');

[...itemsLi].forEach(item => {
  if (item.children.length > 0) {
    const headline = item.firstChild;
    const spanElem = document.createElement('span');

    item.prepend(spanElem);
    spanElem.append(headline);
  }
});

list.addEventListener('click', e => {
  const targetElem = e.target.closest('span');

  if (targetElem) {
    targetElem.nextElementSibling.hidden
      = !targetElem.nextElementSibling.hidden;
  }
});
