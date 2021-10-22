'use strict';

const listTitle = document.querySelectorAll('li');
const mainList = document.querySelector('.tree');

for (const item of listTitle) {
  if (item.firstElementChild) {
    const itemSpan = document.createElement('span');

    itemSpan.innerText = item.firstChild.textContent;
    itemSpan.classList = 'headline';
    item.insertBefore(itemSpan, item.firstElementChild);
    item.firstChild.textContent = '';
  }
};

const hideOrShow = (e) => {
  if (e.target.classList.contains('headline')) {
    if (e.target.nextElementSibling.hasAttribute('hidden')) {
      e.target.nextElementSibling.removeAttribute('hidden');
    } else {
      e.target.nextElementSibling.setAttribute('hidden', true);
    }
  };
};

mainList.addEventListener('click', hideOrShow);
