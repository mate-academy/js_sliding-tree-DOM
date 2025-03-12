'use strict';

const style = document.createElement('style');

style.innerHTML = `
  .hidden {
    display: none;
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
  addSpanToHeaders();
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const parentLi = e.target.parentElement;
    const nestedUl = parentLi.querySelector('ul');

    if (nestedUl) {
      nestedUl.classList.toggle('hidden');
    }
  }
});

function addSpanToHeaders() {
  const listOfHeaders = document.querySelectorAll('li');

  listOfHeaders.forEach((item) => {
    const span = document.createElement('span');

    span.textContent = item.firstChild.textContent.trim();
    span.style.cursor = 'pointer';
    item.firstChild.replaceWith(span);
  });
}
