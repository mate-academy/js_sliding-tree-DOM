'use strict';

const tree = document.querySelector('.tree');
const treeItems = tree.querySelectorAll('li');

treeItems.forEach(item => {
  if (item.firstChild.nextElementSibling) {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    item.firstChild.replaceWith(span);
  }
});

tree.addEventListener('click', ev => {
  const headline = ev.target.closest('span');

  if (!headline || !tree.contains(headline)) {
    return;
  }

  headline.nextElementSibling.hidden = !headline.nextElementSibling.hidden;
});
