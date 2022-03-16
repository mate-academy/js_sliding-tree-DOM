'use strict';

const treeNodes = document.querySelectorAll('ul');

let elem;

for (let i = 0; i < treeNodes.length; i++) {
  if (treeNodes[i].closest('li')) {
    const wrapper = document.createElement('span');

    elem = treeNodes[i].closest('li').firstChild;
    elem.parentNode.insertBefore(wrapper, elem);
    wrapper.appendChild(elem);
  }
}

document.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
