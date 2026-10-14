'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const subList = li.querySelector('ul');

  if (subList) {
    const span = document.createElement('span');
    let textNode = null;

    for (const node of li.childNodes) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
        textNode = node;
        break;
      }
    }

    if (textNode) {
      span.textContent = textNode.textContent;
      li.replaceChild(span, textNode);
    }
  }
});

const ul = document.querySelector('ul');

ul.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'SPAN') {
    return;
  }

  const getParentElement = ev.target.parentElement;
  const parentElement = getParentElement.querySelector('ul');

  if (parentElement.style.display === 'none') {
    parentElement.style.display = 'block';
  } else {
    parentElement.style.display = 'none';
  }
});
