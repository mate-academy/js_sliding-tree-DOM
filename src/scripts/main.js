'use strict';

const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');

for (const item of liElements) {
  const spanWithTitle = document.createElement('span');

  item.prepend(spanWithTitle);
  spanWithTitle.append(spanWithTitle.nextSibling);
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const container = e.target.parentNode.querySelector('ul');

  if (!container) {
    return;
  }

  if (!container.hidden) {
    container.hidden = true;
  } else {
    container.hidden = false;
  }
});
