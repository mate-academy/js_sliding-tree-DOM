'use strict';

const list = document.querySelector('.tree');

const spanIn = (node) => {
  const liArr = node.querySelectorAll('li');

  for (let i = 0; i < liArr.length; i++) {
    const span = document.createElement('span');

    liArr[i].prepend(span);
    span.append(span.nextSibling);
  }
};

spanIn(list);

list.addEventListener('click', e => {
  const item = e.target;

  if (item.tagName !== 'SPAN') {
    return;
  }
  item.nextSibling.hidden = !item.nextSibling.hidden;
});
