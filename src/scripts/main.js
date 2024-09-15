'use strict';

const list = document.querySelector('.tree');
const items = [...document.getElementsByTagName('li')];
const headers = items.filter((element) => element.firstElementChild);

headers.forEach((element) => {
  const wrapper = document.createElement('span');

  element.prepend(wrapper);
  wrapper.append(wrapper.nextElementSibling);
});

list.addEventListener('click', (event) => {
  const item = event.target;

  if (item.tagName !== 'SPAN' || !item.nextElementSibling) {
    return;
  }

  item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
});
