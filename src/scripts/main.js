'use strict';

const list = document.querySelector('.tree');

document.querySelectorAll('li').forEach(element => {
  const wrapper = document.createElement('span');

  if (element.children.length !== 0) {
    element.append(wrapper);
    wrapper.append(element.firstChild.textContent.trim());
    element.firstChild.textContent = '';
    element.prepend(wrapper);
  }
});

list.addEventListener('click', e => {
  if (e.target.matches('span')) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
