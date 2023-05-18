'use strict';

const liElements = [...document.querySelectorAll('ul > li')];

for (const element of liElements) {
  const span = document.createElement('span');

  span.innerText = element.firstChild.data.trim();

  if (element.firstElementChild) {
    element.firstChild.replaceWith(span);
  }
}

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
