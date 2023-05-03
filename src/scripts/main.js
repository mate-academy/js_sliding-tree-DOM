'use strict';

const liList = document.querySelectorAll('li');

for (const item of liList) {
  const newSpan = document.createElement('span');

  newSpan.append(item.firstChild);
  item.prepend(newSpan);

  newSpan.addEventListener('click', (e) => {
    if (e.target.nextSibling) {
      e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
    }
  });
}
