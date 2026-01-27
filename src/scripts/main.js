'use strict';

const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  const textNodes = Array.from(li.childNodes).filter((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '';
  });

  textNodes.forEach((textNode) => {
    const span = document.createElement('span');

    span.textContent = textNode.textContent;

    li.replaceChild(span, textNode);
  });
});

const spans = document.querySelectorAll('span');

spans.forEach((sp) => {
  sp.addEventListener('click', (ev) => {
    const childrenContainer = sp.parentElement.querySelector('ul');

    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
      sp.classList.toggle('closed');
      sp.classList.toggle('open');
    }

    ev.stopPropagation();
  });
});
