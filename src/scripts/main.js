'use strict';

const listItems = document.querySelectorAll('li');
const list = document.querySelector('.tree');

Array.from(listItems).forEach(element => {
  if (element.children.length === 0) {
    return;
  }

  const value = element.childNodes[0];
  const span = document.createElement('span');

  span.append(value.nodeValue);
  value.remove();
  element.prepend(span);
});

list.addEventListener('click', (ev) => {
  const item = ev.target.closest('span');

  if (!item) {
    return;
  }

  const innerUl = item.parentElement.children[1];

  Array.from(innerUl.children).forEach((el, index) => {
    setTimeout(() => {
      el.hidden = !el.hidden;
    }, 50 * index);
  });
});
