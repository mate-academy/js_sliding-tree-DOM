'use strict';

const tree = document.querySelector('.tree');
const liItem = tree.querySelectorAll('li');

for (const item of liItem) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', (eventClick) => {
  if (!eventClick.target.nextSibling || eventClick.target.tagName !== 'SPAN') {
    return;
  }

  switch (eventClick.target.nextSibling.hidden) {
    case false:
      eventClick.target.nextSibling.hidden = true;
      break;

    case true:
      eventClick.target.nextSibling.hidden = false;
      break;
  };
});
