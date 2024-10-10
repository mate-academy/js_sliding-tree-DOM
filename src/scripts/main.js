'use strict';

const liEls = document.querySelectorAll('.tree li');

liEls.forEach((el) => {
  if (el.firstElementChild) {
    const ulEl = el.querySelector('ul');

    const spanEl = document.createElement('span');

    const headerText = ulEl.parentElement.firstChild.textContent.trim();

    spanEl.textContent = headerText;

    el.firstChild.replaceWith(spanEl);

    spanEl.addEventListener('click', () => {
      ulEl.style.display = ulEl.style.display === 'none' ? 'block' : 'none';
    });
  }
});
