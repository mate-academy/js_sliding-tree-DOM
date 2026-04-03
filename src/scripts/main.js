'use strict';

const tree = document.querySelector('.tree');
const nodeLi = tree.querySelectorAll('li');

for (const li of nodeLi) {
  // does li have list
  const isUl = Boolean(li.querySelector('ul'));

  if (isUl) {
    const span = document.createElement('span');

    span.append(li.firstChild);
    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const nestedList = e.target.parentNode.querySelector('ul');

  if (!nestedList) {
    return;
  }

  nestedList.hidden = !nestedList.hidden;
});
