'use strict';

const tree = document.querySelector('.tree');
const treeLists = tree.querySelectorAll('ul');

for (const list of treeLists) {
  const listName = list.previousSibling.data.trim();

  list.previousSibling.remove();

  list.insertAdjacentHTML('beforebegin', `<span>${listName}</span>`);
  list.opened = true;
}

tree.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName === 'SPAN') {
    const list = target.nextElementSibling;

    if (list.opened) {
      list.style.display = 'none';
      list.opened = false;
    } else {
      list.style.display = 'block';
      list.opened = true;
    }
  }
});
