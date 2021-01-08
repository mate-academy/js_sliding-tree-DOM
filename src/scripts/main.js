'use strict';

const headers = [...document.querySelectorAll('li')];

for (const header of headers) {
  const text = header.firstChild.data;

  if (header.childNodes.length > 1) {
    header.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
    header.firstChild.nextSibling.data = '';
  }
}

const lists = [...document.querySelectorAll('ul')];

for (const item of lists) {
  item.classList.add('visible');
}

document.querySelector('.tree').addEventListener('click', (evvnt) => {
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
