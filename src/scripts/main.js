'use strict';

const items = document.querySelectorAll('li');

items.forEach((el) => {
  const child = el.querySelector('ul');

  if (child) {
    const arrOfChilds = Array.from(el.childNodes);
    const textNode = arrOfChilds.find(
      (node) => node.nodeType === Node.TEXT_NODE,
    );

    if (textNode) {
      textNode.data = textNode.data.trim();

      const wrap = document.createElement('span');

      wrap.classList.add('tree__header');
      wrap.append(textNode);
      el.prepend(wrap);
    }
  }
});

document.querySelector('.tree').addEventListener('click', (e) => {
  const header = e.target.closest('.tree__header');

  if (header) {
    const childs = header.nextElementSibling;

    if (childs) {
      const computedStyle = window.getComputedStyle(childs);

      if (computedStyle.display !== 'none') {
        childs.style.display = 'none';
      } else {
        childs.style.display = 'block';
      }
    }
  }
});
