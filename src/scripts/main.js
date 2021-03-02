'use strict';

const listItems = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

for (const listItem of listItems) {
  if (listItem.children.length > 0) {
    const span = document.createElement('span');

    span.classList.add('ul--wrapper');
    span.textContent = listItem.firstChild.textContent;
    listItem.firstChild.replaceWith(span);
  }
}

tree.addEventListener('click', clickEvent => {
  const headerNode = clickEvent.target.closest('.ul--wrapper');

  if (!headerNode) {
    return;
  }

  headerNode.nextElementSibling.hidden = !headerNode.nextElementSibling.hidden;
});
