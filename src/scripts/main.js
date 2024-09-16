'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', e => {
  const container = e.target.parentElement.querySelector('ul');

  if (e.target.tagName !== 'SPAN' || !container) {
    return;
  };

  container.hidden = !container.hidden;
});
