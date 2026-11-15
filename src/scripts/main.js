'use strict';

let arrayOfLi = [...document.querySelectorAll('li')];

arrayOfLi = arrayOfLi.filter((element) => element.children.length !== 0);

arrayOfLi.forEach((element) => {
  const newSpan = document.createElement('span');

  newSpan.textContent = element.firstChild.data.trim();
  element.firstChild.replaceWith(newSpan);
});

document.addEventListener('click', (e) => {
  if (e.target.closest('span')) {
    const eElement = e.target.nextElementSibling;

    if (eElement.style.display === 'none') {
      eElement.style.display = '';
    } else {
      eElement.style.display = 'none';
    }
  }
});
