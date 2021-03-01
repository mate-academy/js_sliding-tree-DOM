'use strict';

const list = document.querySelector('.tree');

const listTitle = list.querySelectorAll('li');

function toggleVisibility(ev) {
  const hiddenElement = ev.target.nextSibling;

  if (hiddenElement.hidden === true) {
    hiddenElement.hidden = false;
  } else {
    hiddenElement.hidden = true;
  }
}

for (const title of listTitle) {
  const wrapper = document.createElement('span');

  title.prepend(wrapper);
  wrapper.append(wrapper.nextSibling);

  wrapper.addEventListener('click', toggleVisibility);
}
