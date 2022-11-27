'use strict';

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

for (const item of items) {
  if (item.firstElementChild) {
    const wrap = document.createElement('span');

    wrap.append(item.firstChild);
    item.prepend(wrap);
  }
}

list.addEventListener('click', (occurrent) => {
  const item = occurrent.target;

  if (item.tagName !== 'SPAN') {
    return;
  }

  if (item.parentElement.querySelector('ul').style.display === 'none') {
    item.parentElement.querySelector('ul').style.display = 'block';
  } else {
    item.parentElement.querySelector('ul').style.display = 'none';
  }
});
