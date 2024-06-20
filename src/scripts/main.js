'use strict';

const tree = document.querySelector('.tree');

const arrLi = [...document.querySelectorAll('li')];

arrLi.forEach((li) => {
  const title = li.childNodes[0];

  if (title.nodeType !== Node.TEXT_NODE) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = title.textContent;
  title.textContent = '';

  li.insertAdjacentElement('afterbegin', span);
});

tree.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    // eslint-disable-next-line
    return;
  }

  // debugger;

  const ul = span.nextElementSibling;

  if (!ul || ul.tagName !== 'UL') {
    // eslint-disable-next-line
    return;
  }

  if (ul.style.display === 'none') {
    ul.style.display = '';
  } else {
    ul.style.display = 'none';
  }
});
