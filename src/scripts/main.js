'use strict';

// write code here
const tree = document.querySelector('.tree');

const liElements = document.querySelectorAll('.tree li');

Array.from(liElements).forEach((item) => {
  const textNode = Array.from(item.childNodes).find(
    (n) => n.nodeType === 3 && n.textContent.trim(),
  );

  if (textNode) {
    /* створити span, перенести текст, замінити */
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();
    item.insertBefore(span, textNode);
    item.removeChild(textNode);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const list = li.querySelector('ul');

  if (list) {
    list.hidden = !list.hidden;
  }
});
