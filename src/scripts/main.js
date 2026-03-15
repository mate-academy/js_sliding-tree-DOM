'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((item) => {
  const childUl = item.querySelector(':scope > ul');
  const textNode = Array.from(item.childNodes).find(
    (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim(),
  );

  if (!childUl || !textNode) {
    return;
  }

  const title = textNode.textContent.trim();
  const span = document.createElement('span');

  span.textContent = title;
  item.insertBefore(span, childUl);
  textNode.remove();

  span.addEventListener('click', () => {
    childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
  });
});
