'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('.tree > li');
const subList = document.querySelectorAll('.tree > li > ul > li');

for (const item of list) {
  item.insertAdjacentHTML('afterbegin', `
  <span>${item.firstChild.textContent.trim()}</span>`);
  item.firstElementChild.nextSibling.remove();
}

for (const item of subList) {
  item.insertAdjacentHTML('afterbegin', `
  <span>${item.firstChild.textContent.trim()}</span>`);
  item.firstElementChild.nextSibling.remove();
}

tree.addEventListener('click', (e) => {
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
