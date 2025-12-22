'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((el) => {
  const childList = el.querySelector('ul');

  if (childList) {
    const span = document.createElement('span');
    const text = el.firstChild;

    span.appendChild(text);
    el.prepend(span);

    span.addEventListener('click', () => {
      if (
        childList.style.display === '' ||
        childList.style.display === 'block'
      ) {
        childList.style.display = 'none';
      } else {
        childList.style.display = 'block';
      }
    });
  }
});
