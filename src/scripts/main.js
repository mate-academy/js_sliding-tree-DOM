'use strict';

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');
  const textNode = item.firstChild;

  span.textContent = textNode.textContent.trim();

  textNode.replaceWith(span);

  span.addEventListener('click', () => {
    const nestedList = item.querySelector(':scope > ul');

    if (nestedList) {
      nestedList.hidden = !nestedList.hidden;
    }
  });
});
