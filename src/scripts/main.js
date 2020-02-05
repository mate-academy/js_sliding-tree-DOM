'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', function(item) {
  if (item.target.tagName !== 'SPAN') {
    return;
  }

  const ul = item.target.parentElement.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.classList.toggle('hidden');
});
