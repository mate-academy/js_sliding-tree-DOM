'use strict';

const container = document.querySelector('.tree');

const li = document.querySelectorAll('.tree li');

li.forEach((el) => {
  const childList = el.querySelector(':scope > ul');

  if (!childList) {
    return;
  }

  if (el.querySelector(':scope > span')) {
    return;
  }

  const textNode = Array.from(el.childNodes).find(
    (n) => n.nodeType === 3 && n.textContent.trim(),
  );

  if (!textNode) {
    return;
  }

  const s = document.createElement('span');

  s.textContent = textNode.textContent.trim();

  el.replaceChild(s, textNode);
});

const style = document.createElement('style');

style.textContent = 'ul.collapsed { display: none; }';

document.head.appendChild(style);

container.addEventListener('click', (e) => {
  const t = e.target;

  const span = t.closest('span');

  if (!span) {
    return;
  }

  const header = span.closest('li');

  if (!header) {
    return;
  }

  const child = header.querySelector(':scope > ul');

  if (!child) {
    return;
  }

  child.classList.toggle('collapsed');
});
