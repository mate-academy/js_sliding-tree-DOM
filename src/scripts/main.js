'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  const text = [...li.childNodes].filter(
    (t) => t.nodeType === Node.TEXT_NODE && t.textContent.trim(),
  );

  const span = document.createElement('span');

  span.textContent = text.map((n) => n.textContent.trim()).join(' ');

  text.forEach((t) => t.remove());

  li.prepend(span);
});

tree.addEventListener('click', (e) => {
  const element = e.target;

  if (element.tagName !== 'SPAN') {
    return;
  }

  const list = e.target.nextElementSibling;

  if (list.tagName !== 'UL') {
    return;
  }

  list.toggleAttribute('hidden');
});
