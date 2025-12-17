'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((el) => {
  const textNode = [...el.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    textNode.replaceWith(span);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentElement;
  const childUl = parentLi.querySelector('ul');

  if (childUl) {
    childUl.hidden = !childUl.hidden;
  }
});
