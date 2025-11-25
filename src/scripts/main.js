'use strict';

const allLi = document.querySelectorAll('.tree li');

allLi.forEach((liElem) => {
  const headLiElem = liElem.querySelector('ul');

  if (headLiElem) {
    const spanEl = document.createElement('span');
    const headLi = liElem.firstChild.textContent.trim();

    liElem.firstChild.textContent = '';
    spanEl.textContent = headLi;
    liElem.prepend(spanEl);

    spanEl.addEventListener('click', () => {
      if (headLiElem.style.display === 'none') {
        headLiElem.style.display = 'block';
      } else {
        headLiElem.style.display = 'none';
      }
    });
  }
});
