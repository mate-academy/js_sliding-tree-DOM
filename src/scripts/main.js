'use strict';
// write code here

const tree = document.querySelector('.tree');
const list = document.querySelectorAll(`ul`);

[...list].forEach(el => {
  if (!el.classList.contains(`tree`)) {
    const span = document.createElement(`span`);

    span.innerText = el.previousSibling.textContent.trim();
    span.classList.add(`span`);
    el.previousSibling.replaceWith(span);
  }
});

tree.addEventListener('click', function(e) {
  if (e.target.classList.contains(`span`)) {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
