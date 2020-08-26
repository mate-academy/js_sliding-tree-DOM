'use strict';

(function() {
  const tree = document.querySelector('.tree');
  const list = document.querySelectorAll('li');

  tree.style.cssText = `
  position: absolute;
  top: ${tree.getBoundingClientRect().top}px;
  left: ${tree.getBoundingClientRect().left}px`;

  for (const elem of [...list]) {
    const textUl = elem.firstChild.textContent;

    elem.firstChild.remove();

    elem.insertAdjacentHTML('afterbegin', `
    <span>${textUl}</span>
    `);
  }

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.nextElementSibling.tagName === 'UL') {
      if (target.nextElementSibling.style.display !== 'none') {
        target.nextElementSibling.style.display = 'none';
      } else {
        target.nextElementSibling.style.display = 'block';
      }
    }
  });
}());
