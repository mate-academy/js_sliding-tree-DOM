'use strict';

const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');
  const text = item.firstChild.textContent.trim();

  span.innerText = text;
  item.firstChild.textContent = null;

  item.prepend(span);
}

document.body.addEventListener('click', listEvent => {
  const listItem = listEvent.target.closest('span');

  if (!listItem || !listItem.nextElementSibling) {
    return;
  }

  const unList = listItem.nextElementSibling;

  unList.hidden ? unList.hidden = false : unList.hidden = true;
});
