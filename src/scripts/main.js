'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const textNode = li.firstChild;

  if (textNode && textNode.nodeType === Node.TEXT_NODE) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    li.insertBefore(span, textNode);
    li.removeChild(textNode);
  }
});

tree.querySelectorAll('ul').forEach((ul) => {
  ul.style.display = 'none';
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentElement;
  const childUl = parentLi.querySelector('ul');

  if (!childUl) {
    return;
  }

  childUl.style.display = childUl.style.display === 'none' ? 'block' : 'none';
});
