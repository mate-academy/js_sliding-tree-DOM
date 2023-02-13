'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const element = e.target.nextSibling;

  element.getAttribute('hidden') ? element.removeAttribute('hidden')
    : element.setAttribute('hidden', true);
});
