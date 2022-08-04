'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

// Add span
for (const li of list) {
  if (li.children.length !== 0) {
    const span = document.createElement('span');

    li.prepend(span);

    span.append(span.nextSibling);

    // Close list
    span.addEventListener('click', (e) => {
      span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
    });
  }
};
