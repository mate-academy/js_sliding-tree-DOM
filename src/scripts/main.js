'use strict';

const items = document.body.querySelectorAll('li');
const list = document.body.querySelector('.tree');

items.forEach(item => {
  const itemInnerText = item.firstChild.nodeValue;
  const span = document.createElement('span');

  span.innerHTML = itemInnerText;
  span.dataset.clickCount = 0;
  item.firstChild.replaceWith(span);
});

list.addEventListener('click', toHide);

function toHide(e) {
  const parentChildren = [...e.target.parentElement.children];
  const target = e.target;

  if (target !== 'span' && !target.children) {
    return;
  }

  if (!list.contains(target)) {
    return;
  }

  target.dataset.clickCount++;

  parentChildren.forEach((child) => {
    if (
      parentChildren.indexOf(child) !== 0
      && target.dataset.clickCount % 2 !== 0
    ) {
      child.hidden = true;
    } else {
      child.hidden = '';
    }
  });
}
