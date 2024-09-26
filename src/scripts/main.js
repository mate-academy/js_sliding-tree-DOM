'use strict';

document.querySelectorAll('li').forEach(li => {
  if (li.firstElementChild) {
    const text = li.firstChild.textContent;

    li.firstChild.remove();
    li.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
  }
});

document.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
