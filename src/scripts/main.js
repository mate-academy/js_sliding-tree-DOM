'use strict';

const body = document.querySelector('body');
const list = body.querySelector('ul.tree');

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const currentLi = e.target.closest('li');
    const currentUl = currentLi.querySelector('ul');

    if (currentUl.style.display === 'none') {
      currentUl.style.display = '';
    } else {
      currentUl.style.display = 'none';
    }
  }
});

function listShowHideFichure(node) {
  const childCollection = node.querySelectorAll('li');

  // Abbriviation of empty text
  childCollection.forEach((li) => {
    if (li.querySelector('ul')) {
      const span = document.createElement('span');

      span.textContent = li.firstChild.textContent;
      li.firstChild.textContent = '';
      li.prepend(span);
    }
  });
}

listShowHideFichure(list);
