'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const text = [...li.childNodes].find(
    (node) => node.nodeType === 3 && node.textContent.trim() !== '',
  );

  if (text) {
    const span = document.createElement('span');

    span.textContent = text.textContent;
    li.insertBefore(span, text);
    li.removeChild(text);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const ul = li.querySelector('ul');

  if (!ul && !li) {
    return;
  }

  ul.style.display = ul.style.display === 'none' ? '' : 'none';
});
