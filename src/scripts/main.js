'use strict';

const list = document.querySelector('.tree');

for (const li of list.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (e) => {
  if (e.target.nextSibling === null) {
    return;
  }

  if (e.target.nextSibling.tagName === 'UL') {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  }
});
