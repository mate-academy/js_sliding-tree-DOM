'use strict';

const tree = document.querySelector('.tree');

function wrapHeaders(element) {
  for (const child of element.children) {
    if (child.children.length === 0) {
      continue;
    }

    const header = child.firstChild;
    const span = document.createElement('span');

    span.textContent = header.textContent;
    child.replaceChild(span, header);

    wrapHeaders(child);
  }
}

wrapHeaders(tree);

tree.addEventListener('click', (e) => {
  const listItem = e.target.closest('li');

  if (!listItem || listItem.children.length === 0) {
    return;
  }

  const childList = listItem.querySelector('ul');

  childList.hidden = !childList.hidden;
});
