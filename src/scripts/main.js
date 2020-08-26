'use strict';

const liArray = [...document.querySelectorAll('li')];

for (let i = liArray.length - 1; i >= 0; i--) {
  if (liArray[i].querySelector('ul')) {
    const heading = liArray[i].firstChild.textContent.trim();

    liArray[i].firstChild.remove();

    liArray[i].insertAdjacentHTML('afterbegin', `
      <span>${heading}</span>
    `);
  }
}

document.addEventListener('click', (event) => {
  const item = event.target;

  if (item.nextElementSibling.tagName === 'UL') {
    item.nextElementSibling.hidden = !item.nextElementSibling.hidden;
  }
});
