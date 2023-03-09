'use strict';

const treeList = document.querySelector('.tree');
const li = document.querySelectorAll('li');
const eventName = 'click'


for (const item of li) {
  const span = document.createElement('span');

  item.prepend(span)
  span.append(span.nextSibling);
}

treeList.addEventListener(eventName, el => {
  el.target.nextSibling.hidden = !el.target.nextSibling.hidden;
})

