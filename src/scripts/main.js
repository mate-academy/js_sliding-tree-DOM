'use strict';

const items = document.querySelectorAll('.tree li');

items.forEach((item) => {
  const title = item.firstChild.textContent.trim();
  const titleSpan = document.createElement('span');

  titleSpan.append(title);
  item.firstChild.replaceWith(titleSpan);

  titleSpan.addEventListener('click', () => {
    const nestedList = item.querySelector('ul');

    if (nestedList === null) {
      return;
    }

    nestedList.hidden = !nestedList.hidden;
  });
});
