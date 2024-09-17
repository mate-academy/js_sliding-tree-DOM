'use strict';

const list = document.querySelector('.tree');
const liElements = document.querySelectorAll('li');

liElements.forEach(item => {
  const li = item.firstChild;
  const text = li.textContent.trim();

  li.remove();

  item.insertAdjacentHTML('afterbegin', `
    <span>${text}</span>
  `);
});

let indication = false;

list.addEventListener('click', e => {
  const item = e.target.closest('span');

  if (!item || !e.target.contains(item)) {
    return null;
  }

  const ulInside = item.nextElementSibling;

  if (ulInside && ulInside.matches('ul')) {
    const hidden = 'opacity: 0; height: 0px; visibility: hidden;';
    const visible = 'opacity: 1; height: auto; visibility: visible;';
    const ulStyle = ulInside.style;

    if (!indication) {
      ulStyle.cssText = hidden;
      indication = true;

      return null;
    }
    ulStyle.cssText = visible;
    indication = false;
  }
});
