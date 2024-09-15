'use strict';

// write code here
const treeUl = document.getElementsByTagName('ul')[0];
const treeList = treeUl.getElementsByTagName('li');

for (let i = 0; i < treeList.length; i++) {
  const li = treeList[i];
  const span = document.createElement('span');

  li.insertBefore(span, li.firstChild);
  span.appendChild(span.nextSibling);
}

treeUl.onclick = function (e) {
  const target = e.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const li = target.parentNode;
  const node = li.getElementsByTagName('ul')[0];

  if (!node) {
    return;
  }

  node.style.display = node.style.display ? '' : 'none';
};
