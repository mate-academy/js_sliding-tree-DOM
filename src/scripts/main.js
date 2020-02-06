'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', () => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const ul = event.target.parentNode.querySelector('ul');

  ul.hidden = !ul.hidden;
});
