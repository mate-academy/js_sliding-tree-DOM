'use strict';
// write code here

const liElements = document.querySelectorAll('li');

liElements.forEach((elLi) => {
  if (elLi.querySelector('ul')) {
    const newSpan = document.createElement('span');
    const headerText = elLi.firstChild.textContent.trim();

    newSpan.textContent = headerText;
    elLi.firstChild.replaceWith(newSpan);
  }
});

document.addEventListener('click', (ev) => {
  const header = ev.target.closest('span');

  if (!header) {
    return;
  }

  const list = header.nextElementSibling;

  if (list.style.display === 'none') {
    list.style.display = '';
  } else {
    list.style.display = 'none';
  }
});
