'use strict';

// write code here
const treeList = document.querySelector('.tree');

function wrapTextInSpans(node) {
  node.childNodes.forEach((item) => {
    if (item instanceof Text && item.textContent.trim() !== '') {
      const span = document.createElement('span');

      span.classList.add('text-list');
      span.textContent = item.textContent;
      item.textContent = '';
      node.prepend(span);
    }

    if (item.tagName === 'UL') {
      traverseTree(item);
    }
  });
}

function traverseTree(element) {
  if (!element) {
    return;
  }

  Array.from(element.children).forEach((child) => {
    wrapTextInSpans(child);
  });
}

traverseTree(treeList);

const spanList = document.querySelectorAll('.text-list');

spanList.forEach((element) => {
  element.addEventListener('click', () => {
    const list = element.parentElement.children[1];

    if (!list) {
      return;
    }

    if (list.tagName === 'UL') {
      const isHidden = getComputedStyle(list).display === 'none';

      list.style.display = isHidden ? 'block' : 'none';
    }
  });
});
