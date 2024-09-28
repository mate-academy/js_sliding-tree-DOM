'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach(item => {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const ul = e.target.parentElement.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  }
});
