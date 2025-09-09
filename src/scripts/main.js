'use strict';

const tree = document.querySelector('.tree');
const lists = [...document.querySelectorAll('ul')];

lists.forEach((list) => {
  const parentLi = list.closest('li');

  if (parentLi) {
    const textNode = Array.from(parentLi.childNodes).find(
      (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim(),
    );

    if (textNode) {
      const span = document.createElement('span');

      span.textContent = textNode.textContent;
      span.setAttribute('class', 'header');
      textNode.textContent = '';
      parentLi.prepend(span);
    }
  }
});

if (tree) {
  tree.addEventListener('click', (e) => {
    const targetEl =
      e.target instanceof Element ? e.target : e.target.parentElement;
    const header = targetEl && targetEl.closest('.header');

    if (!targetEl) {
      return;
    }

    if (header) {
      listHandler(header);
    }
  });
}

function listHandler(item) {
  const list = item.nextElementSibling;

  if (!list || list.tagName !== 'UL') {
    return;
  }

  if (list.clientHeight > 0) {
    list.style.maxHeight = '0';
    list.style.opacity = '0';
    list.style.pointerEvents = 'none';
  } else {
    list.style.maxHeight = '100%';
    list.style.opacity = '1';
    list.style.pointerEvents = 'auto';
  }
}
