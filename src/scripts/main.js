'use strict';

const lis = document.querySelectorAll('li');
const titles = [];

lis.forEach((li) => {
  if (li.hasChildNodes()) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent;
    li.childNodes[0].remove();
    li.prepend(span);

    titles.push(span);
  }
});

titles.forEach((title) => {
  title.addEventListener('click', () => {
    const li = title.parentElement;
    const children = Array.from(li.children).slice(1);

    children.forEach((child) => {
      if (child.style.display === 'none') {
        child.style.display = '';
      } else {
        child.style.display = 'none';
      }
    });
  });
});
