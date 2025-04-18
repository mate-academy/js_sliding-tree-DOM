'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const childNodes = Array.from(li.childNodes);

  for (const node of childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.insertBefore(span, node);
      li.removeChild(node);
      break;
    }
  }
});

const tree = document.querySelector('.tree');

tree.onclick = function (eve) {
  if (eve.target.tagName !== 'SPAN') {
    return;
  }

  const li = eve.target.closest('li');
  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  }

  childUl.hidden = !childUl.hidden;
};
