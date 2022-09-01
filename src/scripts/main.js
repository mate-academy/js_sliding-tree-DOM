'use strict';

const list = document.querySelector('.tree');

for (const li of list.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (e) => {
  const item = e.target.closest('span');

  if (!item || !list.contains(item)) {
    return;
  }

  const container = e.target.parentNode.querySelector('ul');

  if (!container) {
    return;
  };

  container.hidden = !container.hidden;
});
