'use strict';

// write code here
const titleCollection = [...document.querySelectorAll('li')];

titleCollection.forEach((li) => {
  if (li.childNodes.length > 1) {
    const title = li.firstChild.textContent;

    li.firstChild.textContent = '';
    li.insertAdjacentHTML('afterbegin', `<span>${title}</span>`);
  }
});

addEventListener('click', (e) => {
  const wrappedSpanTitles = [...document.querySelectorAll('span')];
  const nextSibling = e.target.nextElementSibling;
  const checkVisibility = nextSibling.hasAttribute('style');

  if (wrappedSpanTitles.includes(e.target) && !checkVisibility) {
    nextSibling.style = 'visibility: hidden; height: 0';
  } else {
    nextSibling.removeAttribute('style');
  }
});
