'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

listItems.forEach(li => {
  // Знайти перший текстовий вузол
  const nodes = Array.from(li.childNodes);
  const textNode = nodes.find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    const span = document.createElement('span');
    span.textContent = textNode.textContent.trim();
    textNode.replaceWith(span);
  }
});


// Вешаем обработчик
tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const ul = li.querySelector('ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
