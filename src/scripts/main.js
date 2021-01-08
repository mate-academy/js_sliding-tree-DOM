'use strict';

const list = [...document.querySelectorAll('LI')];

list.forEach(el => {
  if (el.children.length > 0) {
    const savedText = el.firstChild.data;

    el.firstChild.data = '';
    el.insertAdjacentHTML('afterbegin', `<span>${savedText}</span>`);
  }
});

function hider(e) {
  if (e.target.tagName === 'SPAN') {
    if (e.target.nextElementSibling.hidden === false) {
      e.target.nextElementSibling.hidden = true;
    } else {
      e.target.nextElementSibling.hidden = false;
    }
  }
}

document.addEventListener('click', hider);
