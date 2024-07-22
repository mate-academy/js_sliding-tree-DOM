'use strict';

const tree = document.querySelector('.tree');

const treeLi = [...tree.querySelectorAll('li')];

treeLi.forEach((item) => {
  if (item.children.length > 0) {
    const nameItem = item.firstChild.textContent.trim();

    item.firstChild.innerHTML = `<span> ${nameItem} </span>`;
  }
});

const hide = `position: absolute ; opacity: 0 ; visibility: hidden;`;
const show = `position: initial  ; opacity: 1 ;visibility: initial `;

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'UL') {
    return;
  }

  if (
    e.target.children &&
    !e.target.classList.contains('hide') &&
    !e.target.classList.contains('tree')
  ) {
    [...e.target.children].forEach((item) => {
      e.target.classList.add('hide');
      item.style.cssText = hide;
    });
  } else {
    [...e.target.children].forEach((item) => {
      e.target.classList.remove('hide');
      item.style.cssText = show;
    });
  }
});
