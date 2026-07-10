'use strict';

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const li of items) {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const ul = li.querySelector('ul');

  ul.hidden = !ul.hidden;
});
