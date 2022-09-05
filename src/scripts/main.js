'use strict';

// write code here

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

for (const li of list) {
  if (li.children.length !== 0) {
    const span = document.createElement('span');

    li.prepend(span);

    span.append(span.nextSibling);

    span.addEventListener('click', (e) => {
      span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
    });
  }
};
