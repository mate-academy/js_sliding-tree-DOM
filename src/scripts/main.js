'use strict';

const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

for (const list of lists) {
  const span = document.createElement('span');

  list.prepend(span);

  span.append(span.nextSibling);
}

tree.addEventListener('click', (events) => {
  if (events.target.tagName !== 'SPAN') {
    return;
  }

  const hideList = events.target.parentNode.querySelector('ul');

  if (!hideList) {
    return;
  }

  hideList.hidden = !hideList.hidden;
});
