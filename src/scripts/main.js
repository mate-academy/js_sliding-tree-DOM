'use strict';

const tree = document.querySelector('.tree');
const links = document.querySelectorAll('li');

for (const li of links) {
  const span = document.createElement('span');
  const text = li.firstChild.textContent;
  li.firstChild.textContent = '';

  span.innerHTML = `${text}`;
  li.prepend(span);
}

tree.addEventListener('click', (e) => {
  const element = e.target.closest('li');

  for (const item of element.children) {
    if (!item.hasAttribute('hidden') && item.querySelector('span')) {
      item.setAttribute('hidden', true);
    } else {
      item.removeAttribute('hidden');
    }
  }
});
