'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach(el => {
  const wrapper = document.createElement('span');

  el.prepend(wrapper);

  wrapper.append(wrapper.nextSibling);
});

tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
