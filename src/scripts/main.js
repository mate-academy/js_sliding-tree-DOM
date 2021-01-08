'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('.tree > li');
const subItems = document.querySelectorAll('.tree > li > ul > li');

function addSpan(elements) {
  for (const item of elements) {
    item.insertAdjacentHTML('afterbegin',
      `<span>${item.firstChild.textContent}</span>`);
    item.firstChild.nextSibling.remove();
  }
}

const hide = (ev) => {
  if (!ev.target.closest('span')) {
    return;
  }

  const elem = ev.target.closest('span').nextSibling;

  elem.style.display === 'none'
    ? elem.style.display = 'block'
    : elem.style.display = 'none';
};

list.addEventListener('click', hide);
addSpan(items);
addSpan(subItems);
