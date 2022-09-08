'use strict';

const liItems = document.querySelectorAll('li');
const headers = [...liItems].filter(item => item.children.length > 0);

headers.forEach(el => {
  const item = el.childNodes[0];
  const wrapper = document.createElement('span');

  wrapper.textContent = item.textContent.trim();
  el.replaceChild(wrapper, item);
});

const list = document.querySelector('.tree');

function showAndHide(e) {
  const title = e.target.closest('span');

  if (!title || !list.contains(title)) {
    return;
  }

  if (title.nextElementSibling.hidden) {
    title.nextElementSibling.hidden = false;
    title.style.fontWeight = 'initial';
  } else {
    title.nextElementSibling.hidden = true;
    title.style.fontWeight = 'bold';
  }
}

list.addEventListener('click', showAndHide);
