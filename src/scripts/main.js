'use strict';

const tree = document.querySelector('.tree');
const elements = tree.querySelectorAll('li');

[...elements].forEach(elem => {
  const span = document.createElement('span');

  span.prepend(elem.firstChild);
  elem.prepend(span);
});

function callback(event) {
  const target = event.target;

  if (target.nextElementSibling.tagName === 'UL') {
    target.nextElementSibling.hidden !== true
      ? target.nextElementSibling.hidden = true
      : target.nextElementSibling.hidden = false;
  };
}

document.addEventListener('click', callback);
