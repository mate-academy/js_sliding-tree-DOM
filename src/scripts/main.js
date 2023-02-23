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

  const container = e.target.parentNode.querySelector('ul');

  if (!container) {
    return;
  }

  container.hidden = !container.hidden;
});
