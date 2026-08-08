'use strict';

// write code here
const table = document.querySelectorAll('.tree');

function wrapper(item) {
  const wrapperSpan = document.createElement('span');

  wrapperSpan.classList.add('tree-label');

  item.parentNode.insertBefore(wrapperSpan, item);
  wrapperSpan.appendChild(item);
}

table.forEach((tree) => {
  const items = tree.querySelectorAll('li');

  items.forEach((li) => {
    let textNode = null;

    for (const node of li.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim() !== '') {
        textNode = node;
        break;
      }
    }

    if (textNode) {
      wrapper(textNode);
    }
  });
});

table.forEach((el) => {
  el.addEventListener('click', (ev) => {
    const label = ev.target.closest('.tree-label');

    if (!label) {
      return;
    }

    const clickedLi = label.closest('li');
    const childLi = clickedLi.querySelector(':scope > ul');

    if (!childLi) {
      return;
    }

    childLi.style.display = childLi.style.display === '' ? 'none' : '';

    ev.stopPropagation();
  });
});
