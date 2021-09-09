'use strict';

const listOfLi = document.querySelectorAll('li');

listOfLi.forEach(item => {
  if (item.children[0] !== undefined) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);

    span.addEventListener('click', () => {
      const itemLi = item.querySelectorAll('li');

      itemLi.forEach(li => {
        if (li.style.display === 'none') {
          li.style.display = 'block';
        } else {
          li.style.display = 'none';
        }
      });
    });
  }
});
