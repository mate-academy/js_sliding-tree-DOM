'use strict';

// write code here

const ulList = document.querySelectorAll('li > ul');

ulList.forEach((ul) => {
  const li = ul.parentElement;

  for (const node of li.childNodes) {
    if (node.nodeType === 3 && node.textContent.trim().length > 0) {
      const textNode = node;
      const span = document.createElement('span');

      span.textContent = textNode.textContent;
      textNode.replaceWith(span);

      break;
    }
  }
});

const mainUl = document.querySelector('.tree');

mainUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const span = e.target;
    const nestedUl = span.nextElementSibling;

    if (nestedUl) {
      if (nestedUl.style.display === 'none') {
        nestedUl.style.display = '';
      } else {
        nestedUl.style.display = 'none';
      }
    }
  }
});
