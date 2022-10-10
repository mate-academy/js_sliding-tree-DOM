'use strict';

const list = document.querySelectorAll('li');

for (const row of list) {
  const span = document.createElement('span');

  row.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', elem => {
  const element = elem.target.nextSibling;

  if (elem.target.tagName === 'SPAN') {
    element.hidden = !element.hidden;
  }
});
