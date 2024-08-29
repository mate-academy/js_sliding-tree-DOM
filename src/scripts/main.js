'use strict';

const liElements = document.querySelectorAll('.tree li');

liElements.forEach((li) => {
  if (li.childNodes.length !== 1) {
    const newSpan = document.createElement('span');

    newSpan.textContent = li.childNodes[0].textContent;
    li.childNodes[0].textContent = '';
    li.prepend(newSpan);
  }
});

const headTag = document.querySelector('head');
const styleTag = document.createElement('style');

styleTag.textContent = '.close { display: none; }';
headTag.prepend(styleTag);

const spanCollection = document.querySelectorAll('span');

spanCollection.forEach((span) => {
  span.onclick = function () {
    span.nextElementSibling.classList.toggle('close');
  };
});
