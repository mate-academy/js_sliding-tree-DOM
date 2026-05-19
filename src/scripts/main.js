'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const ul = li.querySelector(':scope > ul');

  if (!ul) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.firstChild.remove();

  li.prepend(span);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentElement.querySelector(':scope > ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
