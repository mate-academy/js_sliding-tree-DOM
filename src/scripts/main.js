'use strict';

const list = document.querySelector('ul.tree');

for (const listItem of list.querySelectorAll('li')) {
  const childList = [...listItem.children].find(
    (child) => child.tagName === 'UL',
  );

  if (!childList) {
    continue;
  }

  const titleNode = [...listItem.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );

  const titleText = document.createElement('span');

  titleText.textContent = titleNode.textContent.trim();
  titleNode.replaceWith(titleText);

  titleText.addEventListener('click', () => {
    childList.hidden = !childList.hidden;
  });
}
