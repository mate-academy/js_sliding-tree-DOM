'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

[...items].forEach(item => {
  const wrapper = document.createElement('span');

  if (item.children.length > 0) {
    item.prepend(wrapper);
    wrapper.append(wrapper.nextSibling);
  }
});

list.addEventListener('click', (e) => {
  const nextList = e.target.closest('span').nextSibling;

  [...nextList.children].forEach((item, index) => {
    setTimeout(() => {
      item.hidden = !item.hidden;
    }, 100 * index);
  });
});
