'use strict';

const ulElement = document.querySelector('.tree');
const liElements = document.querySelectorAll('li');

liElements.forEach((element) => {
  const spanElement = document.createElement('span');

  spanElement.textContent = element.firstChild.textContent;
  element.firstChild.textContent = '';
  element.prepend(spanElement);
});

ulElement.addEventListener('click', (e) => {
  if (e.target.nextElementSibling) {
    if (e.target.nextElementSibling.hasAttribute('hidden')) {
      e.target.nextElementSibling.removeAttribute('hidden');

      return;
    }

    e.target.nextElementSibling.setAttribute('hidden', true);
  }
});
