'use strict';

const allItemsOfTree = document.querySelectorAll('li');
const allListsOfTree = document.querySelectorAll('ul');

for (const li of allItemsOfTree) {
  const span = document.createElement('span');

  span.append(li.firstChild);
  li.prepend(span);

  for (const ul of allListsOfTree) {
    if (li.contains(ul)) {
      li.classList.add('tree_header');
    }
  }
}

document.querySelector('.tree').addEventListener('click', e => {
  const item = e.target;

  if (!item.parentElement.classList.contains('tree_header')) {
    return;
  }
  item.nextSibling.toggleAttribute('hidden');
});
