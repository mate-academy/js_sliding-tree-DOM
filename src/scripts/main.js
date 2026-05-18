'use strict';

const tree = document.querySelector('.tree');

if (tree) {
  const listItems = tree.querySelectorAll('li');

  listItems.forEach((li) => {
    const span = document.createElement('span');
    span.textContent = li.firstChild.textContent.trim();
    
    li.firstChild.remove();
    li.prepend(span);
  });

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const parentLi = e.target.closest('li');
    if (!parentLi) {
      return;
    }

    const list = parentLi.querySelector(':scope > ul');
    if (!list) {
      return;
    }

    list.hidden = !list.hidden;
  });
}
