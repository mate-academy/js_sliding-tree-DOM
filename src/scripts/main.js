'use strict';

const tree = document.querySelector('.tree');
const listOfLi = document.querySelectorAll('li');

listOfLi.forEach((li) => {
  const text = li.firstChild.data.replace(/\W/gi, '');

  const span = document.createElement('span');

  span.textContent = text;

  li.firstChild.data = '';
  li.insertAdjacentElement('afterbegin', span);
});

tree.addEventListener('click', (e) => {
  const children = [...e.target.parentElement.children];

  children.forEach((element) => {
    if (element.tagName === 'UL' && element.style.display === 'none') {
      element.style.display = 'block';

      return;
    }

    if (
      element.tagName === 'UL' &&
      getComputedStyle(element).display === 'block'
    ) {
      element.style.display = 'none';
    }
  });
});
