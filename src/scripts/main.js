'use strict';

const tree = document.querySelector('.tree');

const lists = tree.querySelectorAll('li');

lists.forEach((list) => {
  if (list.childNodes.length !== 1) {
    const textNode = list.childNodes[0];
    const text = textNode.textContent.trim();
    const span = document.createElement('span');

    span.textContent = text;
    list.insertBefore(span, textNode);
    textNode.remove();
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const hiddenUl = e.target.nextSibling;

    if (hiddenUl) {
      hiddenUl.hidden = !hiddenUl.hidden;
    }
  }
});
