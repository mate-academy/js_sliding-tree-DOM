'use strict';

const tree = document.querySelector('.tree');
const li = tree.querySelectorAll('li');

for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentContainer = e.target.parentNode.querySelector('ul');

  if (!parentContainer) {
    return;
  }

  if (!parentContainer.hidden) {
    parentContainer.hidden = true;
  } else {
    parentContainer.hidden = false;
  }
});
