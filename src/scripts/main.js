'use strict';

const list = document.querySelector('.tree');
const itemList = document.querySelectorAll('li');

itemList.forEach(item => {
  if (item.firstElementChild) {
    const span = document.createElement('span');
    const title = item.firstChild.textContent;

    span.textContent = title;
    item.firstChild.replaceWith(span);
  }
});

list.addEventListener('click', (eventClick) => {
  const subList = eventClick.target.nextElementSibling;

  if (!subList || subList.tagName !== 'UL') {
    return;
  }

  if (subList.style.display !== `none`) {
    subList.style.display = `none`;
  } else {
    subList.style.display = `block`;
  }
});
