'use strict';

const list = document.querySelector('.tree');
const listHeadlines = list.querySelectorAll('li');

listHeadlines.forEach(element => {
  const createSpan = document.createElement('span');

  element.prepend(createSpan);
  createSpan.append(createSpan.nextSibling);
});

list.addEventListener('click', dropdown);

function dropdown(events) {
  const item = events.target.closest('span').nextSibling;

  item.hidden = !item.hidden;
};
