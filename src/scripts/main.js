'use strict';

// write code here
const list = document.querySelectorAll('.tree li');

list.forEach((li) => {
  const childN = li.childNodes;

  for (const node of childN) {
    if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.nodeValue.trim();
      li.replaceChild(span, node);
      break;
    }
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.closest('li');
  const subList = parentLi.querySelector('ul');

  if (subList) {
    subList.hidden = !subList.hidden;
  }
});
