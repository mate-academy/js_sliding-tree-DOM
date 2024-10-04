'use strict';

const listLi = document.querySelectorAll('.tree li');

Array.from(listLi).forEach((element) => {
  const text = element.childNodes[0].nodeValue.trim();

  const span = document.createElement('span');

  span.textContent = text;

  element.childNodes[0].nodeValue = '';
  element.insertBefore(span, element.childNodes[0]);

  span.addEventListener('click', () => {
    const list = element.querySelector('ul');

    if (list) {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
    }
  });
});
