'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('.tree > li');
const subList = document.querySelectorAll('.tree > li > ul > li');

for (const item of list) {
  item.insertAdjacentHTML('afterbegin', `
  <span class="list">${item.firstChild.textContent.trim()}</span>`);
  item.firstElementChild.nextSibling.remove();
}

for (const item of subList) {
  item.insertAdjacentHTML('afterbegin', `
  <span class="sub-list">${item.firstChild.textContent.trim()}</span>`);
  item.firstElementChild.nextSibling.remove();
}

tree.addEventListener('click', (e) => {
  if (e.target.classList.contains('list')) {
    if (e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  }

  if (e.target.classList.contains('sub-list')) {
    if (e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  }
});
