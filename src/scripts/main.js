'use strict';

const list = document.querySelector('.tree');
const listItems = list.querySelectorAll('li');

for (const item of listItems) {
  const span = document.createElement('span');

  if (item.children.length) {
    item.prepend(span);
    span.append(span.nextSibling);
  }
}

const hideList = (click) => {
  const text = click.target;

  if (text.tagName === 'SPAN') {
    text.nextElementSibling.hidden = !text.nextElementSibling.hidden;
  }
};

list.addEventListener('click', hideList);
