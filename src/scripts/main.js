'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((li) => {
  const textNode = [...li.childNodes].find(
    (n) => n.nodeType === Node.TEXT_NODE,
  );

  if (!textNode) return;

  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  textNode.replaceWith(span);

  span.style.cursor = 'pointer';

  span.addEventListener('click', () => {
    const childList = li.querySelector(':scope > ul');

    if (childList) {
      childList.hidden = !childList.hidden;
    }
  });
});
