'use strict';

const list = document.querySelector('.tree');

const listItems = [...document.querySelectorAll('li')];

for (const item of listItems) {
  if (item.children.length !== 0) {
    const wrapper = document.createElement('span');

    item.prepend(wrapper);
    wrapper.append(wrapper.nextSibling);
  }
}

list.addEventListener('click', function changeList(e) {
  if (e.target.closest('span').nextSibling.hasAttribute('hidden')) {
    e.target.closest('span').nextSibling.removeAttribute('hidden');
  } else if (e.target.closest('span').nextSibling) {
    e.target.closest('span').nextSibling.setAttribute('hidden', '');
  }
});
