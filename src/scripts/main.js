'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.tree');

  chooseItemWithSublist(list);

  function chooseItemWithSublist(table) {
    table.querySelectorAll('li').forEach(item => {
      if (item.children.length > 0) {
        const innerText = item.firstChild.textContent;

        item.firstChild.textContent = '';

        item.insertAdjacentHTML('afterbegin', `<span>${innerText}</span>`);
      }
    });
  }

  list.addEventListener('click', e => {
    if (e.target.closest('span')) {
      const subList = e.target.closest('span').nextElementSibling;

      // subList.style.display = 'none';
      if (getComputedStyle(subList).display !== 'none') {
        subList.style.display = 'none';
      } else {
        subList.style.display = 'block';
      }

      // if (!subList.style.display) {

      // }
    };
  });
});
