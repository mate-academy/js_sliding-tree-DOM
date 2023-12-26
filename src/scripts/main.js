'use strict';

const tree = document.querySelector('.tree');

insertSpan();
tree.addEventListener('click', hideUl);

function insertSpan() {
  const lists = document.querySelectorAll('li');

  for (const li of lists) {
    if (li.firstElementChild) {
      const text = li.firstChild.data;

      li.firstChild.remove();

      li.insertAdjacentHTML('afterbegin', `
      <span class = 'headline'>${text}</span>`);
    }
  }
}

function hideUl(ev) {
  if (ev.target.tagName === 'SPAN') {
    ev.target.nextElementSibling.hidden = !ev.target.nextElementSibling.hidden;
  }
}
