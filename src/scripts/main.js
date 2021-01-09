'use strict';

const headers = document.querySelectorAll('li');

[...headers].map(x => {
  const content = x.childNodes[0].textContent;

  x.childNodes[0].remove();
  x.insertAdjacentHTML('afterbegin', `<span>${content}</span>`);
});

const spans = document.querySelectorAll('span');

document.addEventListener('click', (e) => {
  if (![...spans].includes(e.target)) {
    return;
  }

  if (!e.target.hided) {
    e.target.closest('li').children[1].style.display = 'none';
    e.target.hided = true;
  } else {
    e.target.closest('li').children[1].style = '';
    e.target.hided = false;
  }
});
