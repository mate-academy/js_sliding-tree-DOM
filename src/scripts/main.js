'use strict';

const ul = document.querySelector('.tree');
const listItems = ul.querySelectorAll('li');

listItems.forEach((li) => {
  const childNodes = Array.from(li.childNodes);
  const textNode = childNodes.find(
    (node) => node.nodeType === 3 && node.textContent.trim() !== '',
  );

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    textNode.replaceWith(span);
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const childrenUl = li.querySelector(':scope > ul');

  if (!childrenUl) {
    return;
  }

  const isHidden = childrenUl.style.display === 'none';

  childrenUl.style.display = isHidden ? '' : 'none';
});
