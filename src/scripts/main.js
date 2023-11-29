'use strict';

const lists = document.querySelectorAll('ul');

lists.forEach(list => {
  const items = list.children;

  [...items].forEach(item => {
    const textNode = item.firstChild;

    item.replaceChild(document.createElement('span'), textNode);
    item.firstChild.textContent = textNode.textContent.trim();
  });
});

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const target = e.target.closest('li').lastElementChild;

  if (target.tagName === 'UL') {
    target.hidden = !target.hidden;
  }
});
