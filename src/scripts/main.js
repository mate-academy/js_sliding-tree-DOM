'use strict';

const elementsLi = [...document.querySelectorAll('li')];

for (const element of elementsLi) {
  if (element.children.length === 0) {
    continue;
  }

  const span = document.createElement('span');

  span.textContent = element.firstChild.textContent.trim();
  element.firstChild.remove();
  element.prepend(span);
};

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  if (event.target.matches('span')) {
    const list = event.target.nextElementSibling;

    list.hidden = !list.hidden;
  }
});
