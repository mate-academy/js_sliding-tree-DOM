'use strict'

const treeList = document.querySelector('.tree');
const treeItems = treeList.querySelectorAll('li');

for (const element of treeItems) {
  const span = document.createElement('span');

  if (element.childElementCount > 0) {
    element.prepend(span);
    span.append(span.nextSibling);
  }
}

treeList.onclick = function(e) {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
}
