'use strict';

const ul = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
  if (list[i].children.length > 0) {
    const span = document.createElement('span');
    span.append(list[i].firstChild);
    list[i].prepend(span);
  }
}

ul.addEventListener('click', (e) => {
  const title = e.target;

  if (title.tagName === 'SPAN') {
    title.nextElementSibling.hidden = !title.nextElementSibling.hidden;
  }
});

