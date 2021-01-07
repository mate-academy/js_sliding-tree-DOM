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

const hide = (newEvent) => {
  const elem = newEvent.target.closest('span').nextSibling;

  elem.style.display === 'none'
    ? elem.style.display = 'block'
    : elem.style.display = 'none';
};

addSpan(items);
addSpan(subItems);
list.addEventListener('click', hide);
