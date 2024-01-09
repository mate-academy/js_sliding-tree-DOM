'use strict';

// write code here
const tree = document.querySelector('.tree');

const addSpanForEachHeader = (element) => {
  const childrens = [...element.children];

  childrens.forEach(child => {
    if (child.children.length !== 0) {
      const newHeader = document.createElement('span');
      const headerText = child.firstChild.nodeValue.trim();

      newHeader.textContent = headerText;
      child.removeChild(child.firstChild);
      child.insertBefore(newHeader, child.firstChild);

      addSpanForEachHeader(child);
    }
  });
};

addSpanForEachHeader(tree);

tree.addEventListener('click', e => {
  const header = e.target.closest('span');

  if (header) {
    const list = header.nextElementSibling;

    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
});
