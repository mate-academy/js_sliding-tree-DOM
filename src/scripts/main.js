'use strict';

const el = [...document.querySelectorAll('ul > li')];

for (const a of el) {
  if (a.querySelector('ul')) {
    const child = a.firstChild;
    const text = a.firstChild.data.trim();

    const span = document.createElement('span');

    span.innerText = text;
    a.replaceChild(span, child);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const title = e.target.closest('span');

  title.nextElementSibling.hidden = !title.nextElementSibling.hidden;
});
