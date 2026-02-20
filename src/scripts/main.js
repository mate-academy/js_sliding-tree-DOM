'use strict';

const allLi = document.querySelectorAll('li');

for (const li of allLi) {
  const textLi = li.firstChild;
  const span = document.createElement('span');

  li.prepend(span);

  span.append(textLi);
}

const mainUl = document.querySelector('ul');

mainUl.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const neighborElement = span.nextElementSibling;

  if (neighborElement) {
    neighborElement.hidden = !neighborElement.hidden;
  }
});
