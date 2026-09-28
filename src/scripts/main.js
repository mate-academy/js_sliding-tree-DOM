'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((item) => {
  const nestedList = item.querySelector(':scope > ul');

  if (!nestedList) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.insertBefore(span, nestedList);
  item.firstChild.remove();

  span.addEventListener('click', () => {
    nestedList.hidden = !nestedList.hidden;
  });
});
