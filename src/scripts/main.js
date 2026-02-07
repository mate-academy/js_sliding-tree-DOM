'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach((element) => {
  if (element.children.length) {
    wrapElement(element, 'span');
  }
});

function wrapElement(element, wrapperTag) {
  const createdElement = document.createElement(wrapperTag);

  createdElement.textContent = element.firstChild.textContent;

  element.replaceChild(createdElement, element.firstChild);
}

tree.addEventListener('click', (evt) => {
  const target = evt.target;
  let subtree;

  if (target.tagName === 'SPAN') {
    const parentLi = target.closest('li');

    subtree = parentLi.querySelector('ul');
  }

  if (!subtree) {
    return;
  }

  if (subtree) {
    subtree.hidden = !subtree.hidden;
  }
});
