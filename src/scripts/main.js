'use strict';

const list = document.querySelectorAll('li');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
};

const li = document.querySelector('.tree');

li.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = e.target.parentNode.querySelector('ul');

  if (!childrenList) {
    return;
  }
  childrenList.hidden = !childrenList.hidden;
});
