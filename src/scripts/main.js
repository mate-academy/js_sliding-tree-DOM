'use strict';

// write code here
const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach((item) => {
  const itemWrapper = document.createElement('span');
  const unit = item.firstChild;

  item.prepend(itemWrapper);
  itemWrapper.append(unit);
});

tree.addEventListener('click', (ev) => {
  const target = ev.target;

  if (target.tagName === 'SPAN') {
    const sublist = target.closest('li').querySelector('ul');

    if (sublist) {
      sublist.hidden = !sublist.hidden;
    }
  }
});
