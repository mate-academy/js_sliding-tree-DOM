'use strict';

const root = document.querySelector('.tree');
const heads = document.querySelectorAll('.tree > li');
const subHeads = document.querySelectorAll('.tree > li > ul > li');

const insertTag = nodes => {
  for (const elem of nodes) {
    const span = document.createElement('span');

    span.textContent = elem.firstChild.textContent.trim();

    elem.firstChild.replaceWith(span);
  }
};

insertTag(heads);
insertTag(subHeads);

root.addEventListener('click', e => {
  if (e.target.tagName === 'SPAN') {
    if (!e.target.nextElementSibling.hidden) {
      e.target.nextElementSibling.hidden = true;
    } else {
      e.target.nextElementSibling.hidden = false;
    }
  }
});
