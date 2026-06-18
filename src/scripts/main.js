'use strict';

const tree = document.querySelector('.tree');

document.querySelectorAll('.tree li').forEach((li) => {
  const text = [...li.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE,
  );

  if (text && text.textContent.trim() !== '') {
    const span = document.createElement('span');

    span.textContent = text.textContent.trim();

    li.insertBefore(span, text);
    li.removeChild(text);
  }
});

// 2. обработчик клика
tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const subTree = li.querySelector('ul');

  if (!subTree) {
    return;
  }

  subTree.hidden = !subTree.hidden;
});
