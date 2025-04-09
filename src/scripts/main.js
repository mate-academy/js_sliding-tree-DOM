'use strict';

const list = document.querySelectorAll('.tree li');

list.forEach((li) => {
  const ul = li.querySelector('ul');

  if (ul) {
    const liText = li.firstChild;
    const span = document.createElement('span');

    span.textContent = liText.textContent;
    li.insertBefore(span, liText);
    li.removeChild(liText);

    span.addEventListener('click', () => {
      ul.style.display = ul.style.display === 'none' ? '' : 'none';
    });
  }
});
