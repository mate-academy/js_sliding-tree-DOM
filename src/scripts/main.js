'use strict';

const tree = document.querySelector('.tree');

for (const item of tree.querySelectorAll('li')) {
  const nested = item.querySelector('ul');

  if (!nested) {
    continue;
  }

  const title = document.createElement('span');

  title.append(item.firstChild);
  item.prepend(title);
}

tree.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  if (!title) {
    return;
  }

  const nested = title.parentElement.querySelector('ul');

  nested.hidden = !nested.hidden;
});
