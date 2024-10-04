'use strict';

const tree = document.querySelector('ul');
const treeLi = [...document.querySelectorAll('li')];

for (const li of treeLi) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.onclick = function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const treeUl = e.target.parentNode.querySelector('ul');

  if (!treeUl) {
    return;
  }

  treeUl.hidden = !treeUl.hidden;
};
