'use strict';

const items = document.querySelectorAll('li:has(> ul)');

items.forEach((item) => {
  const textNode = [...item.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  item.replaceChild(span, textNode);

  span.addEventListener('click', () => {
    const subList = item.querySelector(':scope > ul');

    subList.style.display = subList.style.display === 'none' ? '' : 'none';
  });
});
