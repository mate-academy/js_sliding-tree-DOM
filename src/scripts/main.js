'use strict';

const liList = document.querySelectorAll('.tree li');

function createSpan(list) {
  list.forEach((el) => {
    const header = el.childNodes[0];

    const span = document.createElement('span');

    span.textContent = header.textContent;
    header.replaceWith(span);
  });
}

createSpan(liList);

document.addEventListener('click', (e) => {
  const header = e.target.closest('span');

  if (header) {
    const li = header.closest('li');
    const ul = li.querySelector('ul');

    if (ul) {
      if (ul.style.display === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    }
  }
});
