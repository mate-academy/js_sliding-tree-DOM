'use strict';

const tree = document.querySelector('.tree');

// add SPAN tag for text in LI tag
for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

// add sliding for children
tree.addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (!tree.contains(target) || !target) {
    return;
  }

  const ul = target.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
