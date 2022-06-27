'use strict';

const list = document.querySelectorAll('li');

for (const el of list) {
  const span = document.createElement('span');

  el.prepend(span);
  span.append(span.nextSibling);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return null;
  };

  const container = e.target.parentNode.querySelector('ul');

  if (!container) {
    return null;
  }

  container.hidden = !container.hidden;
});
