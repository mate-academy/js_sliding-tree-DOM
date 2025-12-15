'use strict';

const nav = document.querySelector('.tree');
const li = document.querySelectorAll('li');

li.forEach((element) => {
  const span = document.createElement('span');
  const text = element.childNodes[0].textContent.trim();

  span.textContent = text;

  element.firstChild.replaceWith(span);
});

nav.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const li2 = span.closest('li');
  const ul = li2.querySelector(':scope > ul');

  if (!ul) {
    return;
  }

  ul.style.display = ul.style.display === 'none' ? '' : 'none';
});
