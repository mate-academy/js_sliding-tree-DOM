'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((li) => {
  const nestedUl = li.querySelector(':scope > ul');

  if (nestedUl) {
    let textNode = null;

    for (const node of li.childNodes) {
      if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
        textNode = node;
        break;
      }
    }

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.nodeValue.trim();
      textNode.replaceWith(span);
    }
  }
});

const clickableSpans = document.querySelectorAll('.tree li > span');

clickableSpans.forEach((span) => {
  span.addEventListener('click', () => {
    const parentLi = span.parentElement;
    const nestedList = parentLi.querySelector(':scope > ul');

    if (nestedList) {
      if (nestedList.style.display === 'none') {
        nestedList.style.display = 'block';
      } else {
        nestedList.style.display = 'none';
      }
    }
  });
});
