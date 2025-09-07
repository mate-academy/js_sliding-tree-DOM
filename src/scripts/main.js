'use strict';

const treeUl = document.querySelector('.tree');

treeUl.querySelectorAll('li').forEach((l) => {
  const textNode = Array.from(l.childNodes).find((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '';
  });

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent;
    textNode.replaceWith(span);
  }
});

treeUl.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const nested = li.querySelector('ul');

  if (nested) {
    nested.hidden = !nested.hidden;
  }
});
