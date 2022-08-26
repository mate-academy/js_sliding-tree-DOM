'use strict';

// write code here

const headlines = document.querySelectorAll('li');

for (const element of headlines) {
  if (element.firstElementChild) {
    const span = document.createElement('span');

    element.prepend(span);
    span.append(element.firstChild.nextSibling);
  }
}

document.querySelector('.tree').addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  if (e.target.nextElementSibling.hasAttribute('hidden')) {
    e.target.nextElementSibling.hidden = false;

    return;
  }

  e.target.nextElementSibling.hidden = true;
});
