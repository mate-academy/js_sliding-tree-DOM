'use strict';

const tree = document.querySelector('.tree');
const allLi = tree.querySelectorAll('li');

allLi.forEach((li) => {
  const ul = li.querySelector('ul');

  if (ul) {
    const liChild = li.firstChild;

    if (liChild.nodeType === Node.TEXT_NODE) {
      const textInSpan = document.createElement('span');

      textInSpan.textContent = liChild.textContent;
      li.replaceChild(textInSpan, liChild);
    }
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parents = e.target.closest('li');
  const ulParents = parents.querySelector('ul');

  ulParents.hidden = !ulParents.hidden;
});
