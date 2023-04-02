'use strict';

const tree = document.querySelector('.tree');
const items = [...document.querySelectorAll('li')];

items.forEach(item => {
  const span = document.createElement('span');

  if (item.children.length > 0) {
    item.prepend(span);
    span.append(span.nextSibling);
  };
});

const activeTitles = [...document.querySelectorAll('span')];

tree.addEventListener('click', (e) => {
  if (!activeTitles.includes(e.target)) {
    return;
  };

  const toggledDisplay = e.target.nextSibling.style.display === 'none'
    ? 'block'
    : 'none';

  e.target.nextSibling.style.display = toggledDisplay;
});
