'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');

  const liChilds = tree.querySelectorAll('li');

  liChilds.forEach((li) => {
    const ulChild = li.querySelector('ul');

    if (ulChild) {
      const headNode = li.childNodes[0];

      if (headNode.data.trim() !== '') {
        const span = document.createElement('span');

        span.textContent = headNode.data.trim();

        li.prepend(span);
        headNode.remove();
      }
    }
  });

  tree.addEventListener('click', (e) => {
    const targetEl = e.target;

    if (targetEl.tagName === 'SPAN') {
      const siblingUl = targetEl.parentNode.querySelector('ul');

      if (siblingUl) {
        siblingUl.toggleAttribute('hidden');
      }
    }
  });
});
