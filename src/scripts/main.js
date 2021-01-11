'use strict';

const allLi = document.querySelectorAll('ul li');
const list = document.querySelector('.tree');

[...allLi].forEach(item => {
  const spanContent = item.firstChild.textContent.trim();

  item.firstChild.remove();

  item.insertAdjacentHTML('afterbegin', `
    <span>${spanContent}</span>
  `);
});

list.addEventListener('click', (e) => {
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
