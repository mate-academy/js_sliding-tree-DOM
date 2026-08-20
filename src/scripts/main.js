'use strict';

const tree = document.querySelector('.tree');
const lists = document.querySelectorAll('li');

for (const li of lists) {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.append(li.firstChild);
    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const ul = e.target.parentElement.querySelector('ul');

    ul.hidden = !ul.hidden;
  }
});
