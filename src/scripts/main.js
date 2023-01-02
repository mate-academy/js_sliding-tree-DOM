'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach(li => {
  const header = li.firstChild;
  const wrappedHeader = `<span class="header">`
    + `${header.textContent.trim()}</span>`;

  header.remove();

  li.insertAdjacentHTML('afterbegin', wrappedHeader);
});

tree.addEventListener('click', e => {
  const header = e.target.closest('.header');

  if (!header) {
    return;
  }

  const ul = header.nextElementSibling;

  if (!ul) {
    return;
  }

  if (!ul.hidden) {
    ul.style.height = 0;
    ul.style.visibility = 'hidden';
    ul.hidden = true;
  } else {
    ul.style.height = 'auto';
    ul.style.visibility = 'visible';
    ul.hidden = false;
  }
});
