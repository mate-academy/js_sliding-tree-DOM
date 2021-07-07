'use strict';

const list = document.querySelector('.tree');
const listElements = document.querySelectorAll('li');

listElements.forEach(li => {
  const wrapper = document.createElement('span');

  li.prepend(wrapper);
  wrapper.append(wrapper.nextSibling);
});

list.addEventListener('click', (event) => {
  const item = event.target;

  if (item.tagName !== 'SPAN' || !item.nextElementSibling) {
    return;
  }

  item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
});
