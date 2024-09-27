'use strict';

const list = document.querySelectorAll('li');
const tree = document.querySelectorAll('.tree > li');

list.forEach(item => {
  const text = item.firstChild.textContent;

  if (item.children.length > 0) {
    const span = document.createElement('span');

    span.textContent = text;

    item.firstChild.replaceWith(span);
  }
});

tree.forEach(item => {
  item.addEventListener('click', (ev) => {
    ev.target.nextSibling.hidden = !ev.target.nextSibling.hidden;
  });
})
