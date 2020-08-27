'use strict';

// write code here
const body = document.querySelector('body');
const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

body.style.justifyContent = 'flex-start';
body.style.alignItems = 'flex-start';

for (const element of list) {
  const span = document.createElement('span');

  element.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (event) => {
  const item = event.target.nextSibling;

  if (item.tagName === 'UL') {
    item.hidden = !item.hidden;
  }
});
