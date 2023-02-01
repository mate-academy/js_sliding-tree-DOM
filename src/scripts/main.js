'use strict';

Array.from(document.querySelectorAll('li')).forEach(item => {
  const span = document.createElement('span');
  item.prepend(span);
  span.append(span.nextSibling);
});

const tree = document.querySelector('.tree');

tree.addEventListener('click' , e => {
  const item = e.target.closest('li').children[1];

  if (!item) {
    return;
  }

  item.hidden = !item.hidden;
})
