'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

for (const li of liAll) {
  const ulAll = document.querySelectorAll('ul');

  for (const ul of ulAll) {
    const span = document.createElement('span');

    if (li.contains(ul)) {
      li.prepend(span);
      span.append(span.nextSibling);
    };
  }
};

tree.addEventListener('click', (events) => {
  const item = events.target.closest('li');

  if (events.target.tagName !== 'SPAN') {
    return;
  }

  if (!item.children[1] || !tree.contains(item)) {
    return;
  }

  item.children[1].hidden = !item.children[1].hidden;
});
