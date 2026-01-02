'use strict';

// write code here
const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach((listItem) => {
  const childUl = listItem.querySelector('ul');

  if (!childUl) {
    return;
  }

  const textNodes = [...listItem.childNodes].filter(
    (textNode) =>
      textNode.nodeType === Node.TEXT_NODE && textNode.textContent.trim(),
  );

  const wrapper = document.createElement('span');

  wrapper.textContent = textNodes
    .map((textNode) => textNode.textContent.trim())
    .join(' ');

  textNodes.forEach((textNode) => textNode.remove());

  listItem.prepend(wrapper);
});

tree.addEventListener('click', (e) => {
  const targetElement = e.target;
  const siblingElement = targetElement.nextElementSibling;

  if (targetElement.tagName !== 'SPAN' || siblingElement?.tagName !== 'UL') {
    return;
  }

  siblingElement.toggleAttribute('hidden');
});
