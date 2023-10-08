'use strict';

const tree = document.querySelector('.tree');
const liArray = document.querySelectorAll('li');

for (const li of liArray) {
  const span = document.createElement('span');
  const header = li.firstChild;

  li.prepend(span);
  span.append(header);
}

tree.addEventListener('click', (event) => {
  const element = event.target;

  if (element.tagName !== 'SPAN') {
    return;
  }

  const list = element.parentNode.querySelector('ul');

  if (list) {
    list.hidden = !list.hidden;
  }
});
