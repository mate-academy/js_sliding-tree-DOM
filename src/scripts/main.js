'use strict';

const mainList = document.querySelector('.tree');
const items = [...document.querySelectorAll('li')];

items.forEach((item) => {
  const wrapper = document.createElement('span');

  if (!item.children) {
    return;
  }

  [...item.children].forEach(() => {
    wrapper.textContent = `${item.firstChild.textContent}`;
    item.firstChild.replaceWith(wrapper);
  });
});

mainList.addEventListener('click', (e) => {
  const target = e.target.closest('span');

  if (!target || !mainList.contains(target)) {
    return;
  }

  if (!target.nextSibling.style.display) {
    target.nextSibling.style.display = 'none';
  } else {
    target.nextSibling.style.display = '';
  }
});
