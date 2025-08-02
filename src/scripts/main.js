'use strict';

// write code here
const getHeaderLi = document.querySelectorAll('li');

getHeaderLi.forEach((li) => {
  const span = document.createElement('span');
  const textContent = li.childNodes[0].textContent.trim();

  if (textContent.toUpperCase() !== textContent.toLowerCase()) {
    return;
  }
  span.textContent = textContent;
  li.childNodes[0].replaceWith(span);

  span.addEventListener('click', () => {
    const ul = li.querySelector('ul');

    if (ul) {
      ul.hidden = !ul.hidden;
    }
  });
});
