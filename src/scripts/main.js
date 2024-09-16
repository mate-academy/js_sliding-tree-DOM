'use strict';

const liElems = document.querySelectorAll('li');
const list = document.querySelector('.tree');

for (const item of liElems) {
  const spanEl = document.createElement('span');

  item.prepend(spanEl);
  spanEl.append(spanEl.nextSibling);
}

list.addEventListener('click', (evnt) => {
  evnt.target.nextSibling.hidden = !evnt.target.nextSibling.hidden;
});
