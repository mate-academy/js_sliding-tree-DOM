'use strict';

const ul = [...document.querySelectorAll('ul')];
const headers = ul.map(item => {
  return item.closest('li');
}).filter(item => item !== null);

headers.map(item => {
  return item.insertAdjacentHTML('afterbegin', `<span></span>`);
});

const spans = [...document.querySelectorAll('span')];

spans.map(span => span.append(span.nextSibling));

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const currentTarget = e.target;
  const clickedArea = currentTarget.tagName;

  if (clickedArea !== 'SPAN') {
    return;
  }

  const list = currentTarget.nextSibling;

  list.hidden = !list.hidden;
});
