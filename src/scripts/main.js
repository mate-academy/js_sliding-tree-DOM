'use strict';

// write code here
const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', (action) => {
  if (action.target.tagName === 'SPAN') {
    action.target.nextSibling.hidden = !action.target.nextSibling.hidden;
  }
});
