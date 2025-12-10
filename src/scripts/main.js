'use strict';

const liElements = document.querySelectorAll('li');

liElements.forEach((li) => {
  const text = li.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = text;

  li.firstChild.remove();
  li.prepend(span);
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  childUl.style.display = childUl.style.display === 'none' ? '' : 'none';
});
