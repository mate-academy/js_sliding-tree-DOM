'use strict';

const listOfLi = document.querySelectorAll('li');

listOfLi.forEach(item => {
  if (item.children[0] !== undefined) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);

    span.addEventListener('click', () => {
      span.nextElementSibling.hidden = !span.nextElementSibling.hidden;
    });
  }
});
