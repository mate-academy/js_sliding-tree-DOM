'use strict';

const tree = document.querySelector('.tree');

const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const sublist = item.querySelector(':scope > ul');

  if (!sublist) {
    return;
  }

  const text = [...item.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  const span = document.createElement('span');

  span.textContent = text.textContent.trim();

  item.replaceChild(span, text);

  span.addEventListener('click', () => {
    sublist.hidden = !sublist.hidden;
  });
});
