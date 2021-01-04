'use strict';

const headers = [...document.querySelectorAll('li')];

for (const header of headers) {
  const text = header.firstChild.data;

  header.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);

  if (header.firstChild.nextSibling.nodeName === '#text') {
    header.firstChild.nextSibling.data = '';
  };
}

const spans = [...document.querySelectorAll('span')];
const lists = [...document.querySelectorAll('ul')];

for (const item of lists) {
  item.classList.add('visible');
}

for (const span of spans) {
  span.addEventListener('click', (evvnt) => {
    if (evvnt.target.parentElement.querySelector('ul') !== null) {
      evvnt.target.parentElement
        .querySelector('ul')
        .classList.toggle('hidden');

      evvnt.target.parentElement
        .querySelector('ul')
        .classList.toggle('visible');

      if (evvnt.target.parentElement.querySelector('.hidden')) {
        evvnt.target.parentElement
          .querySelector('.hidden')
          .style.cssText = 'display:none';
      }

      if (evvnt.target.parentElement.querySelector('.visible')) {
        evvnt.target.parentElement
          .querySelector('.visible')
          .style.cssText = 'display:block';
      }
    }
  });
}
