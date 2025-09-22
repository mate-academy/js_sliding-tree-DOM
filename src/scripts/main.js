'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  let textNode = null;

  for (const node of li.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      textNode = node;
      break;
    }
  }

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  textNode.textContent = '';
  li.insertBefore(span, childUl);
});

const tree = document.querySelector('.tree');

if (tree) {
  tree.addEventListener('click', (e) => {
    const target =
      e.target.nodeType === Node.TEXT_NODE ? e.target.parentElement : e.target;
    const span = target.closest('span');

    if (!span || span.parentElement.tagName !== 'LI') {
      return;
    }

    const li = span.parentElement;
    const childUl = li.querySelector(':scope > ul');

    if (childUl) {
      childUl.hidden = !childUl.hidden;
    }
  });
}
