'use strict';

const tree = document.querySelector('.tree');
const allLi = [...tree.querySelectorAll('li')];

allLi.map(x => {
  const span = document.createElement('span');

  x.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', x => {
  if (x.target.tagName === 'SPAN') {
    if (x.target.nextSibling.hidden === false) {
      x.target.nextSibling.hidden = true;
    } else {
      x.target.nextSibling.hidden = false;
    }
    ;
  };
});
