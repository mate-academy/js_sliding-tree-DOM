'use strict';

const headList = document.querySelector('.tree');
const headlineList = document.querySelectorAll('li');

headlineList.forEach(element => {
  if (element.childNodes.length > 1) {
    const headlineText = element.firstChild;

    element.insertAdjacentHTML('afterbegin', `
      <span>${headlineText.textContent}<span>
    `);

    headlineText.remove();
  }
});

// eslint-disable-next-line
headList.addEventListener('click', (event) => {
  if (event.target.closest('span')) {
    const headline = event.target.closest('span');

    if (headline.nextSibling.hidden === false) {
      headline.nextSibling.hidden = true;
    } else {
      headline.nextSibling.hidden = false;
    }
  }
});
