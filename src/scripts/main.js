'use strict';

const head = document.querySelectorAll('li');

head.forEach((li) => {
  const nestedList = li.querySelector('ul');

  if (nestedList) {
    const childNodes = li.childNodes;

    const childText = Array.from(childNodes).find(
      (node) => node.nodeType === 3 && node.textContent.trim() !== '',
    );

    const wrap = document.createElement('span');

    wrap.textContent = childText.textContent;

    li.replaceChild(wrap, childText);

    wrap.addEventListener('click', (e) => {
      if (e.target !== wrap) {
        return;
      }

      if (nestedList) {
        nestedList.hidden = !nestedList.hidden;
      }
    });
  }
});
