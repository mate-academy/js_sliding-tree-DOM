'use strict';

const tree = document.querySelector('.tree');

Array.from(tree.querySelectorAll('li')).forEach((li) => {
  const sublist = Array.from(li.children).find((c) => c.tagName === 'UL');

  if (!sublist) {
    return;
  }

  const textNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  textNode.textContent = '';
  li.prepend(span);

  sublist.style.display = 'none';

  span.addEventListener('click', (e) => {
    e.stopPropagation();
    sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
  });
});
