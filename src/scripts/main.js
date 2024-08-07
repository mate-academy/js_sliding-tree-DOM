'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const spanItem = document.createElement('span');

  item.prepend(spanItem);
  spanItem.append(spanItem.nextSibling);
});

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const eventUl = e.target.parentNode.querySelector('ul');

  if (!eventUl) {
    return;
  }

  eventUl.hidden = !eventUl.hidden;
});
