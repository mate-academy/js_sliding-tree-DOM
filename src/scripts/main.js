'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const childUl = li.querySelector('ul');

  if (!childUl) {
    return;
  }

  const textNode = Array.from(li.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  span.style.cursor = 'pointer';

  li.insertBefore(span, textNode);
  li.removeChild(textNode);

  span.addEventListener('click', () => {
    childUl.hidden = !childUl.hidden;
  });
});
