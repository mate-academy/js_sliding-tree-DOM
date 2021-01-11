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
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
}

document.addEventListener('click', hider);
