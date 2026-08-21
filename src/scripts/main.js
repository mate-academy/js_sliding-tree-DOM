'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      const textNode = li.firstChild;
      const span = document.createElement('span');

      span.textContent = textNode.textContent.trim();

      li.replaceChild(span, textNode);
    }
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const parentLi = e.target.closest('li');
    const targetUl = parentLi ? parentLi.querySelector('ul') : null;

    if (targetUl) {
      targetUl.hidden = !targetUl.hidden;
    }
  });
}
