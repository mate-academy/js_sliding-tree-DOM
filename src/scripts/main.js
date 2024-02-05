'use strict';

const tree = document.querySelector('.tree');

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);

  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const hiddenContainer = e.target.parentNode.querySelector('ul');

  if (!hiddenContainer) {
    return;
  }

  hiddenContainer.hidden = !hiddenContainer.hidden;
});
