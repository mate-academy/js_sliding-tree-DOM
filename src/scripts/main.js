'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const listItem of list) {
  if (listItem.children.length > 0) {
    const span = document.createElement('span');

    listItem.prepend(span);
    span.append(listItem.childNodes[1]);
  }
}

tree.addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const element = event.target;
  const elementDisplay = element.nextSibling.style.display;

  if (elementDisplay !== 'none') {
    element.nextSibling.style.display = 'none';
  }

  if (elementDisplay === 'none') {
    element.nextSibling.style.display = 'block';
  }
});
