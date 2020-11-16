'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const list of [...listItems]) {
  const span = document.createElement('span');

  span.append(list.firstChild);
  list.prepend(span);

  tree.addEventListener('click', e => {
    if (e.target.nextElementSibling.tagName === 'UL') {
      e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    };
  });
}
