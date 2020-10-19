'use strict';

const tree = document.querySelector('.tree');
const listItem = document.querySelectorAll('li');

listItem.forEach(li => {
  if (li.children.length > 0 && li.children[0].tagName === 'UL') {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(li.childNodes[1]);
  }
});

tree.addEventListener('click', event => {
  const { target } = event;

  if (target.tagName !== 'SPAN' || !target.nextElementSibling) {
    return;
  }
  target.nextElementSibling.hidden = !target.nextElementSibling.hidden;
});
