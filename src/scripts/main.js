'use strict';

const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');

liElements.forEach(li => {
  if (li.childElementCount > 0) {
    const newNode = document.createElement('span');

    newNode.textContent = li.firstChild.data.toString();

    li.replaceChild(newNode, li.childNodes[0]);
  }
});

tree.addEventListener('click', e => {
  const ulElement = e.target.parentNode.querySelector('ul');

  for (const child of ulElement.children) {
    child.hidden = !child.hidden;
  }
});
