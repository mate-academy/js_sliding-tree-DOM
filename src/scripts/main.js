'use strict';

for (const item of document.querySelectorAll('li')) {
  if (item.children.length > 0) {
    const name = item.firstChild.textContent;

    item.firstChild.textContent = '';

    item.insertAdjacentHTML('afterbegin', `
      <span class="header">${name}</span>
  `);
  }
};

const tree = document.querySelector('.tree');

tree.style.position = 'absolute';
tree.style.top = tree.getBoundingClientRect().top + 'px';
tree.style.left = tree.getBoundingClientRect().left + 'px';

tree.addEventListener('click', event => {
  const item = event.target;

  if (!item.classList.contains('header')) {
    return;
  }

  item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
});
