'use strict';

const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  const span = document.createElement('span');

  while (li.firstChild) {
    span.appendChild(li.firstChild);
  }

  li.appendChild(span);
});

lis.forEach((li) => {
  li.addEventListener('click', (ev) => {
    const childrenContainer = li.querySelector('ul');

    if (childrenContainer) {
      childrenContainer.hidden = !childrenContainer.hidden;
      li.classList.toggle('closed');
      li.classList.toggle('open');
    }

    ev.stopPropagation();
  });
});
