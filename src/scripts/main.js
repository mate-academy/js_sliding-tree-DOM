'use strict';

// write code here
const rootElement = document.querySelector('.tree');
const listOfHeaders = document.querySelectorAll('li');

listOfHeaders.forEach(li => {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
});

rootElement.addEventListener('click', (e) => {
  // console.dir(e.target);
  if (e.target.tagName === 'SPAN'
  && e.target.nextElementSibling !== null) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
