'use strict';

const li = document.querySelectorAll('li');
const ul = document.querySelector('.tree');

for (let i = 0; i < li.length; i++) {
  const span = document.createElement('span');
  const title = li[i].childNodes[0];

  span.className = 'span';
  span.append(title);
  li[i].prepend(span);
}

ul.addEventListener('click', (e) => {
  const item = e.target;

  if (item.classList.contains('span')) {
    item.nextSibling.hidden = !item.nextSibling.hidden;
  };
});
