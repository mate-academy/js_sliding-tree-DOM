'use strict';

function spanner(el) {
  const headerText = el.firstChild.textContent.trim();
  const span = document.createElement('span');

  el.firstChild.remove();
  span.innerText = headerText;
  el.prepend(span);
}

const liHeaders = document.querySelectorAll('.tree > li');
const subLiHeaders = document.querySelectorAll('.tree > li > ul > li');
const list = document.querySelector('.tree');

liHeaders.forEach(spanner);

subLiHeaders.forEach(spanner);

list.addEventListener('click', (e) => {
  if (e.target.nextSibling.tagName === 'UL') {
    if (!e.target.nextSibling.hidden) {
      e.target.nextSibling.hidden = true;

      return;
    }

    e.target.nextSibling.hidden = false;
  }
});
