'use strict';

const tree = document.querySelector('.tree');

const list = tree.querySelectorAll('li');

list.forEach((el) => {
  const span = document.createElement('span');

  span.append(el.firstChild);
  el.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const li = e.target.parentNode;
    const ulInLi = li.querySelector('ul');

    if (ulInLi) {
      ulInLi.hidden = !ulInLi.hidden;
    }
  }
});
