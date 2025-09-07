'use strict';

const treeUl = document.querySelector('.tree');

treeUl.querySelectorAll('li').forEach((l) => {
  const span = document.createElement('span');

  const textNode = Array.from(l.childNodes).find((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '';
  });

  if (textNode) {
    span.textContent = textNode.textContent;
    textNode.replaceWith(span);
  }
});

treeUl.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const nested = li.querySelector('ul');

  if (nested) {
    nested.hidden = !nested.hidden;
  }
});
