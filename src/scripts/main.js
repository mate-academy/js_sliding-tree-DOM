'use strict';

const allLi = document.querySelectorAll('ul li');
const list = document.querySelector('.tree');

for (let item of [...allLi]) {
  const spanContent = item.firstChild.textContent.trim();

  item.firstChild.remove();

  item.insertAdjacentHTML('afterbegin', `
    <span>${spanContent}</span>
  `);
}


list.addEventListener('click', (event) => {
  event.target.nextElementSibling.hidden = !event.target.nextElementSibling.hidden;
});
