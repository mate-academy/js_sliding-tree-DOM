'use strict';

const liList = document.querySelectorAll('li');
const ul = document.querySelector('ul');

for (const li of liList) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

ul.addEventListener('click', function() {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  if (event.target.nextSibling) {
    event.target.nextSibling.hidden = !event.target.nextSibling.hidden;
  }
});
