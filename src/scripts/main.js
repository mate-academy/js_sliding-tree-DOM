'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

list.forEach((li) => {
  const childUl = li.querySelector('ul');

  if (childUl) {
    const span = document.createElement('span');

    const textNode = Array.from(li.childNodes).find(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '',
    );

    if (textNode) {
      span.textContent = textNode.nodeValue.trim();
      li.insertBefore(span, textNode);
      li.removeChild(textNode);
    }
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
