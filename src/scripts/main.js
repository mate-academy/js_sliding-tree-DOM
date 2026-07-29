'use strict';

const liNodes = document.querySelectorAll('li');

for (const li of liNodes) {
  const span = document.createElement('span');

  span.append(li.firstChild.data.trim());
  li.firstChild.remove();
  li.prepend(span);
}

document.querySelector('.tree').addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const menu = target.parentNode.querySelector('ul');

  if (menu) {
    menu.hidden = !menu.hidden;
  }
});
