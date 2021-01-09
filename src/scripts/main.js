'use strict';

const headers = [...document.querySelectorAll('li')];

for (const header of headers) {
  const text = header.firstChild.data;

  if (header.childNodes.length > 1) {
    header.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
    header.firstChild.nextSibling.data = '';
  }
}

document.querySelector('.tree').addEventListener('click', (evnt) => {
  evnt.target.nextElementSibling.hidden
    = !evnt.target.nextElementSibling.hidden;
});
