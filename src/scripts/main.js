'use strict';

const [...list] = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
  const span = document.createElement('span');

  list[i].prepend(span);
  span.append(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  const clientClick = event.target;

  if (clientClick.nextSibling.tagName === 'UL') {
    clientClick.nextSibling.hidden = true;
  } else {
    clientClick.nextSibling.hidden = false;
  }
});
