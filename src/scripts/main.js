'use strict';

const headers = document.querySelectorAll('.tree li:has(ul)');

headers.forEach((header) => {
  const textNode = header.firstChild;

  const button = document.createElement('button');

  button.setAttribute('aria-label', 'Toggle');
  button.classList.add('toggle-button');
  button.innerHTML = `<span class ="visually-hidden">Toggle</span>`;
  header.prepend(button);

  const span = document.createElement('span');

  span.textContent = textNode.textContent;

  button.addEventListener('click', () => {
    const childUl = header.querySelector('ul');

    childUl.hidden = !childUl.hidden;
  });

  span.addEventListener('click', () => {
    const childUl = header.querySelector('ul');

    childUl.hidden = !childUl.hidden;
  });
  header.replaceChild(span, textNode);
});
