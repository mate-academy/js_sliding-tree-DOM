'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach(li => {
  const text = li.firstChild;

  if (text && text.nodeType === 3) {
    const span = document.createElement('span');
    span.textContent = text.textContent.trim();

    text.replaceWith(span);
  }
});

document.querySelector('.tree').addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const li = event.target.parentElement;
  const subtree = li.querySelector('ul');

  if (!subtree) {
    return;
  }

  subtree.hidden = !subtree.hidden;
});
