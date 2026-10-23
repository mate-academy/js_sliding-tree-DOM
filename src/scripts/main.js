'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const span = document.createElement('span');

    span.append(li.firstChild);

    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentNode.querySelector('ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
