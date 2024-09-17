'use strict';

const ul = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  if (item.children) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

const func = (events) => {
  if (events.target.nextSibling.tagName === 'UL') {
    events.target.nextSibling.hidden = !events.target.nextSibling.hidden;
  }
};

ul.addEventListener('click', func);
