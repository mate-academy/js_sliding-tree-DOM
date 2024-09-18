'use strict';

// write code here
const lists = Array.from(document.querySelectorAll('li')).filter(
  (el) => el.querySelector('ul') !== null,
);

lists.forEach((el) => {
  let isOpened = true;

  el.querySelector('span').addEventListener('click', (e) => {
    if (isOpened) {
      el.querySelector('ul').style.display = 'none';
      isOpened = false;
    } else {
      el.querySelector('ul').style.display = 'block';
      isOpened = true;
    }
  });
});
