'use strict';

const Allli = document.querySelectorAll('li');

for (const elem of Allli) {
  const span = document.createElement('span');

  elem.prepend(span);

  span.textContent = span.nextSibling.textContent;
  span.nextSibling.remove();
};

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = 15 + '%';
tree.style.left = 45 + '%';

tree.addEventListener('click', (ev) => {
  const item = ev.target;

  if (item.nextElementSibling.tagName === 'UL') {
    item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
  };
});
