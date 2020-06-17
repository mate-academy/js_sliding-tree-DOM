'use strict';

let selectedElement;

document.addEventListener('mouseover', e => {
  if (e.target.tagName === 'UL' || e.target.tagName === 'LI') {
    e.target.style.fontWeight = 'bold';

    [...e.target.children].forEach(child => {
      child.style.fontWeight = 'normal';
    });
  };
});

document.addEventListener('mouseout', e => {
  e.target.style.fontWeight = 'normal';
});

document.addEventListener('click', e => {
  selectedElement = e.target;

  if (selectedElement.firstElementChild) {
    if (selectedElement.firstElementChild.tagName === 'UL') {
      selectedElement.firstElementChild.classList.toggle('display-none');
    }
  }
});
