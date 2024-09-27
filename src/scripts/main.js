'use strict';

// write code here

const elements = document.querySelectorAll('li');

for (const element of elements) {
  const span = document.createElement('span');
  const text = element.firstChild.textContent.trim();

  span.innerText = text;
  element.firstChild.textContent = null;

  element.prepend(span);
}

document.body.addEventListener('click', listEvent => {
  const listItem = listEvent.target.closest('span');

  if (!listItem || !listItem.nextElementSibling) {
    return;
  }

  const unList = listItem.nextElementSibling;

  if (unList.hidden) {
    unList.hidden = false;
  } else {
    unList.hidden = true;
  }
});
