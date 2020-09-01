'use strict';

const list = document.querySelectorAll('li');

for (const li of list) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (event) => {
  const element = event.target.nextSibling;

  if (element.tagName === 'UL') {
    element.hidden = !element.hidden;
  }
});
