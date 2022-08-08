'use strict';

// write code here

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const listItem of list) {
  if (listItem.children.length > 0) {
    const span = document.createElement('span');

    listItem.prepend(span);
    span.append(listItem.childNodes[1]);
  }
}

// eslint-disable-next-line no-shadow
tree.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const element = event.target.nextElementSibling;

  element.hidden = !element.hidden;
});
