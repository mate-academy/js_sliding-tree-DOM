'use strict';

const list = document.querySelector('.tree');

let count = 0;

function listHider() {
  count++;

  const item = event.target;
  const ul = item.querySelector('UL');

  if (!item || !item.contains(ul)) {
    return;
  }

  if (count % 2 === 0) {
    ul.style.display = 'none';
  } else {
    ul.style.display = '';
  }
}

function boldText() {
  const item = event.target;
  const ul = item.querySelector('UL');

  if (!item || !item.contains(ul)) {
    return;
  }

  item.style.fontWeight = 'bold';
  item.firstElementChild.style.fontWeight = 'normal';
}

function normalizeText() {
  const item = event.target;
  const ul = item.querySelector('UL');

  if (!item || !item.contains(ul)) {
    return;
  }

  item.style.fontWeight = 'normal';
}

list.addEventListener('click', listHider);
list.addEventListener('mouseover', boldText);
list.addEventListener('mouseout', normalizeText);
