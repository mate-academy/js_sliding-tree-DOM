'use strict';

const allLi = document.querySelectorAll('li');
const filteredLi = Array.from(allLi).filter(
  (li) => li.querySelector('ul') !== null,
);

filteredLi.forEach((li) => {
  const targ = li.firstChild;

  const span = document.createElement('span');

  span.textContent = targ.textContent.trim();
  li.replaceChild(span, targ);
});

document.addEventListener('click', (eve) => {
  const clickedLi = eve.target.closest('li');

  if (clickedLi) {
    const nestedUl = clickedLi.querySelector('ul');

    if (nestedUl) {
      if (getComputedStyle(nestedUl).display === 'none') {
        nestedUl.style.display = 'block';
      } else {
        nestedUl.style.display = 'none';
      }
    }
  }
});
