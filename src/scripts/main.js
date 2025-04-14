'use strict';

const list = document.querySelectorAll('.tree li');

list.forEach((li) => {
  const firstChild = li.firstChild;

  const span = document.createElement('span');
  const childUl = li.querySelector(':scope > ul');

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    span.textContent = firstChild.textContent.trim();
    li.style.listStyle = 'none';
    li.insertBefore(span, firstChild);
    li.removeChild(firstChild);

    span.addEventListener('click', (e) => {
      childUl.hidden = !childUl.hidden;
    });
  }
});
