'use strict';

function changeTree() {
  const liElements = document.querySelectorAll('li');

  liElements.forEach(processTreeItem);
}

const processTreeItem = (element) => {
  const nestedList = element.querySelector('ul');

  if (!nestedList) {
    return;
  }

  const textNode = element.childNodes[0];
  const text = textNode.textContent.trim();

  const span = document.createElement('span');

  span.textContent = text;

  element.insertBefore(span, nestedList);
  textNode.remove();

  span.addEventListener('click', handleToggleNode(span));
};

const handleToggleNode = (span) => {
  const li = span.closest('li');
  const nestedList = li.querySelector('ul');

  nestedList.style.display =
    nestedList.style.display === 'none' ? 'block' : 'none';
};

changeTree();
