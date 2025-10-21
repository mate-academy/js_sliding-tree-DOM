'use strict';

// write code here
const tree = document.querySelector('.tree');

function wrapHeadersWithSpan(node) {
  const children = Array.from(node.children);

  children.forEach(child => {
    if (child.tagName === 'LI') {
      const nestedUl = child.querySelector(':scope > ul'); // шукаємо прямого нащадка <ul>
      if (nestedUl) {
        const textNode = Array.from(child.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '');

        if (textNode) {
          const span = document.createElement('span');
          span.textContent = textNode.textContent.trim();
          textNode.replaceWith(span);
        }
        wrapHeadersWithSpan(nestedUl);
      }
    }
  });
}

wrapHeadersWithSpan(tree);

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') return;

  const ul = e.target.parentElement.querySelector(':scope > ul');
  if (!ul) return;

  ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
});
