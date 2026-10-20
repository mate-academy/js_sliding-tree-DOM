'use strict';

const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const titleText = [...item.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  if (!titleText) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = titleText.textContent.trim();
  item.replaceChild(span, titleText);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childList = e.target.parentElement.querySelector(':scope > ul');

  if (childList) {
    childList.hidden = !childList.hidden;
  }
});
