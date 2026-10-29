'use strict';

const items = document.querySelectorAll('li');

for (const li of items) {
  const nestedList = li.querySelector('ul');

  if (!nestedList) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.replaceWith(span);

  span.addEventListener('click', () => {
    nestedList.hidden = !nestedList.hidden;
  });
}
