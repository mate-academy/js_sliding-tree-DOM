'use strict';

// write code here
const tree = document.querySelector('.tree');
const items = tree.querySelectorAll('li');

items.forEach((item) => {
  const text = item.firstChild;

  if (text.nodeType === Node.TEXT_NODE && text.textContent.trim()) {
    const span = document.createElement('span');

    span.textContent = text.textContent.trim();
    item.replaceChild(span, text);

    span.addEventListener('click', () => {
      const nestedList = item.querySelector(':scope > ul');

      if (nestedList) {
        nestedList.hidden = !nestedList.hidden;
      }
    });
  }
});
