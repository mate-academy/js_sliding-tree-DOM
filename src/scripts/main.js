'use strict';

const list = document.querySelectorAll('li');

for (const item of list) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

document.addEventListener('click', e => {
  const element = e.target.nextSibling;

  if (e.target.tagName === 'SPAN') {
    element.hidden = !element.hidden;
  }
});
