'use strict';

const list = document.querySelector('.tree');
const elementLiList = list.querySelectorAll('li');

for (const item of elementLiList) {
  const span = document.createElement('span');

  item.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', e => {
  const item = e.target.nextSibling;

  const hidden = item.style.display === 'none';

  if (hidden) {
    item.style.display = 'block';
  } else {
    item.style.display = 'none';
  }
});
