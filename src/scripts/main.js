'use strict';

const headers = document.querySelectorAll('li');

for (const element of [...headers]) {
  const header = element.firstChild.textContent.trim();

  element.insertAdjacentHTML('afterbegin',
    `<span>${header}</span>`);

  element.firstChild.nextSibling.remove();

  // eslint-disable-next-line no-shadow
  element.addEventListener('click', (event) => {
    event.stopPropagation();
    element.children[1].hidden = !element.children[1].hidden;
  });
}
