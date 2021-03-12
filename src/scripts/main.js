'use strict';

// write code here

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  span.classList.add('branch');
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (clickEvent) => {
  const list = clickEvent.target.closest('.branch');

  if (!list || list === null) {
    return;
  }

  list.nextElementSibling.hidden = !list.nextElementSibling.hidden;
});
