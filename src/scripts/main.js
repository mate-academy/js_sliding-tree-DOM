'use strict';

// write code here

const itemsWithChildren = Array.from(
  document.querySelectorAll('.tree li'),
).filter((li) => li.querySelector('ul'));

itemsWithChildren.forEach((li) => {
  const textNode = Array.from(li.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (!textNode) {
    return;
  }

  const span = document.createElement('span');

  span.className = 'tree__span';
  span.textContent = textNode.textContent.trim();
  li.insertBefore(span, textNode);
  li.removeChild(textNode);

  span.addEventListener('click', () => {
    const sub = li.querySelector('ul');

    if (!sub) {
      return;
    }

    if (getComputedStyle(sub).display === 'none') {
      sub.style.display = '';
    } else {
      sub.style.display = 'none';
    }
  });
});
