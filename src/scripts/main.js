'use strict';

function wrapHeaders() {
  const headers = document.querySelectorAll('li:has(ul)');

  headers.forEach((li) => {
    const arr = [...li.childNodes];
    const textNode = arr.find(
      (el) => el.nodeType === Node.TEXT_NODE && el.textContent.trim(),
    );

    if (textNode) {
      const createSpan = document.createElement('span');

      createSpan.textContent = textNode.textContent.trim();
      textNode.replaceWith(createSpan);
    }
  });
}

wrapHeaders();

const tree = document.querySelector('.tree');

tree.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'SPAN') {
    const liTag = ev.target.parentElement;
    const ul = liTag.querySelector('ul');

    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  }
});
