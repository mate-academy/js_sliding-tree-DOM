'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('.tree');
  const listOfLi = tree.querySelectorAll('li');

  if (!tree || !listOfLi) {
    return;
  }

  for (const li of listOfLi) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }

  tree.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') {
      return;
    }

    const childerUL = e.target.parentNode.querySelector('ul');

    if (!childerUL) {
      return;
    }

    childerUL.hidden = !childerUL.hidden;
  });
});
