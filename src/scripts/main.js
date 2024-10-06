'use strict';

const itemsOfList = [...document.querySelectorAll('li')];

itemsOfList.forEach((item) => {
  if (item.children.length) {
    const span = document.createElement('span');

    span.textContent = item.childNodes[0].textContent.trim();
    item.prepend(span);
    item.childNodes[1].textContent = '';

    let hidden = false;

    span.onclick = (e) => {
      e.preventDefault();
      span.nextElementSibling.style.display = hidden ? 'block' : 'none';
      hidden = !hidden;
    };
  }
});
