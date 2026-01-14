'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  const textNodes = Array.from(li.childNodes).filter(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '',
  );

  if (!textNodes.length) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = textNodes.map((n) => n.textContent.trim()).join(' ');

  li.insertBefore(span, childUl);

  textNodes.forEach((n) => li.removeChild(n));
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const ul = span.parentElement.querySelector(':scope > ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
