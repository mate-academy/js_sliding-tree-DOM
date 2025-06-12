'use strict';

const tree = document.querySelector('.tree');
const liList = tree.querySelectorAll('li');

liList.forEach((li) => {
  li.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.textContent = node.textContent.trim();
      li.replaceChild(span, node);
    }
  });
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const ul = [...li.children].find((item) => item.tagName === 'UL');

  if (ul) {
    ul.style.display = ul.style.display === 'none' ? '' : 'none';
  }
});
