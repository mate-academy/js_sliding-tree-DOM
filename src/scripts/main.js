'use strict';

const heading = document.querySelectorAll('.heading');

heading.forEach(item => {
  item.addEventListener('click', (elem) => {
    const list = item.nextElementSibling;

    list.classList.toggle('hide');
  });
});
