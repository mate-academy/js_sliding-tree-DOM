'use strict';

// write code here

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);

  span.append(span.nextSibling);
}

const lists = tree.querySelectorAll('ul');

lists.forEach((ul) => {
  ul.hidden = true;
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');
  const nestedList = parentLi.querySelector('ul');

  if (!nestedList) {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
});
