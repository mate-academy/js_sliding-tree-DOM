'use strict';

const headers = document.querySelectorAll('.tree li');

headers.forEach((element) => {
  const spanElement = document.createElement('span');

  spanElement.innerHTML = element.firstChild.textContent;
  element.insertBefore(spanElement, element.firstChild);
  element.firstChild.nextSibling.remove();

  spanElement.addEventListener('click', (e) => {
    const nextEl = e.target.nextElementSibling;

    nextEl.style.display = nextEl.style.display === 'none' ? 'block' : 'none';
  });
});
