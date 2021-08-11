'use strict';

const UL = document.querySelector('.tree');
const LI = document.querySelectorAll('li');

const headersLI = [...LI].filter((el) => {
  return [...el.children].some((child) => {
    return child.tagName === 'UL';
  });
});

headersLI.forEach((li) => {
  const SPAN = document.createElement('span');

  SPAN.textContent = li.firstChild.textContent;

  // console.log(spanHeight);
  li.firstChild.remove();
  li.prepend(SPAN);
});

UL.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN' && e.target.nextElementSibling !== null) {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
