'use strict';

// write code here
const liWithUl = document.querySelectorAll('li:has(> ul)');

liWithUl.forEach((li) => {
  const textNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  li.replaceChild(span, textNode);

  span.onclick = () => {
    const ul = li.querySelector('ul');

    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  };
});
