'use strict';

const list = document.querySelector('.tree');
const items = document.querySelectorAll('li');

items.forEach(item => {
  const span = document.createElement('span');

  if (item.children.length) {
    span.innerText = item.childNodes[0].data.trim();
    item.childNodes[0].data = '';
    item.insertAdjacentElement('afterbegin', span);
  }
});

function hide(e) {
  if (e.target.closest('li')) {
    if (e.target.nextElementSibling.hidden) {
      e.target.nextElementSibling.hidden = false;
    } else {
      e.target.nextElementSibling.hidden = true;
    }
  }
};

list.addEventListener('click', hide);
