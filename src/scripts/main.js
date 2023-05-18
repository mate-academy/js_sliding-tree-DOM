'use strict';

// write code here

const listItems = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const item of listItems) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (!e.target.closest('li')) {
    return;
  };

  e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
});
