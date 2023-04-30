'use strict';

const liElems = document.querySelectorAll('li');
const list = document.querySelector('.tree');

for (const item of liElems) {
  const spanEl = document.createElement('span');

  item.prepend(spanEl);
  spanEl.append(spanEl.nextSibling);
}

list.addEventListener('click', (evnt) => {
  const item = evnt.target;

  if (item.nextSibling === null) {
    return;
  }

  if (item.nextSibling.style.display === 'none') {
    item.nextSibling.style.display = 'block';

    return;
  }

  item.nextSibling.style.display = 'none';
});
