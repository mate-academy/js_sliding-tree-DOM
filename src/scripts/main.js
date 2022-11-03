'use strict';

const items = document.querySelectorAll('li');

for (const li of items) {
  const createSpan = document.createElement('span');

  li.prepend(createSpan);
  createSpan.append(createSpan.nextSibling);
}

document.addEventListener('click', (e) => {
  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
