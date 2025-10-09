'use strict';

const tree = document.querySelector('.tree');
const list = tree.querySelectorAll('li');

for (const li of list) {
  const hasSpan = li.querySelector(':scope > span');

  if (hasSpan) {
    continue;
  }

  const childList = li.querySelector(':scope > ul');

  if (!childList) {
    continue;
  }

  let textNode = null;

  for (const node of li.childNodes) {
    if (node.nodeType === 3 && node.textContent.trim() !== '') {
      textNode = node;
      break;
    }
  }

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    li.insertBefore(span, childList);
    li.removeChild(textNode);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const parentLi = e.target.parentElement;
  const childList = parentLi.querySelector(':scope > ul');

  if (!childList) {
    return;
  }

  childList.hidden = !childList.hidden;
});
