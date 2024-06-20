'use strict';

const lists = [...document.querySelectorAll('ul')];

const listsWithHeadline = lists
  .map((list) => list.parentElement)
  .filter((list) => list.nodeName === 'LI');

listsWithHeadline.forEach((listWrapper) => {
  const span = document.createElement('span');

  span.textContent = listWrapper.childNodes[0].textContent;

  span.addEventListener('click', () => {
    if (span.nextSibling.style.display === 'none') {
      span.nextSibling.style.display = 'block';
    } else {
      span.nextSibling.style.display = 'none';
    }
  });

  listWrapper.replaceChild(span, listWrapper.childNodes[0]);
});
