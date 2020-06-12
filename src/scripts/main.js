/* eslint-disable no-console */
'use strict';

const list = document.querySelector('.tree');

list.addEventListener('click', function(ev) {
  const listInside = Array.from(ev.target.childNodes);

  if (checker(ev.target)) {
    for (const item of listInside) {
      if (item.tagName === 'UL') {
        item.classList.toggle('hide');
      }
    }
  }
});

list.addEventListener('mouseover', function(ev) {
  if (checker(ev.target)) {
    ev.target.style.fontWeight = 'bold';
    ev.target.style.cursor = 'pointer';
    ev.target.firstElementChild.style.fontWeight = 'normal';
    ev.target.firstElementChild.style.cursor = 'auto';
  }
});

list.addEventListener('mouseout', function(ev) {
  if (checker(ev.target)) {
    ev.target.style.fontWeight = 'normal';
  }
});

function checker(element) {
  const checkIsList = Array.from(element.childNodes).some(
    tag => tag.tagName === 'UL');

  return checkIsList;
}
