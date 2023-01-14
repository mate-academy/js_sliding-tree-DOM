'use strict';

const list = document.querySelector('.tree');

const listItems = [...document.querySelectorAll('li')];

for (const item of listItems) {
  if (item.children.length) {
    const wrapper = document.createElement('span');

    item.prepend(wrapper);
    wrapper.append(wrapper.nextSibling);
  }
}

list.addEventListener('click', function changeList(e) {
  const subList = e.target.closest('span').nextSibling;

  if (subList.hasAttribute('hidden')) {
    subList.removeAttribute('hidden');
  } else if (subList) {
    subList.setAttribute('hidden', '');
  }
});
