'use strict';

const list = document.querySelector('.tree');

const itemsLi = document.querySelectorAll('li');

const itemsUl = [...itemsLi].filter(item => {
  return [...item.children].some((child) => {
    return child.tagName === 'UL';
  });
});

itemsUl.forEach(item => {
  const headline = item.firstChild;
  const spanElem = document.createElement('span');

  item.prepend(spanElem);
  spanElem.append(headline);
});

list.addEventListener('click', e => {
  const targetElem = e.target.closest('span');

  if (targetElem) {
    const targetElemNextSiblingStyle
      = getComputedStyle(targetElem.nextElementSibling);

    targetElem.nextElementSibling.style.display
      = (targetElemNextSiblingStyle.display === 'block') ? 'none' : 'block';
  }
});
