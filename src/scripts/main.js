'use strict';

const listLi = document.querySelectorAll('li');

listLi.forEach(item => {
  if (item.children[0] !== undefined) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);

    span.addEventListener('click', () => {
      span.nextSibling.hidden = !span.nextSibling.hidden;
    });
  }
});
