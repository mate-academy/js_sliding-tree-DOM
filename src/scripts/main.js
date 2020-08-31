'use strict';

[...document.querySelectorAll('li')].forEach(elem => {
  if (elem.children.length !== 0) {
    const name = elem.firstChild.textContent;

    elem.firstChild.textContent = '';

    elem.insertAdjacentHTML('afterbegin', `
      <span class="header">${name}</span>
  `);
  }
});

const tree = document.querySelector('.tree');

tree.setAttribute('style', `
  position = 'absolute';
  top = ${tree.getBoundingClientRect().top}px;
  left = ${tree.getBoundingClientRect().left}px;
`);

tree.addEventListener('click', event => {
  const elem = event.target;

  if (!elem.classList.contains('header')) {
    return;
  }

  if (elem.nextElementSibling.hidden) {
    elem.nextElementSibling.hidden = false;
  } else {
    elem.nextElementSibling.hidden = true;
  }
});
