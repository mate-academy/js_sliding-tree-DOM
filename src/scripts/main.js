'use strict';

// write code here
const tree = document.querySelector('.tree');
const list = document.querySelectorAll('li');

list.forEach(item => {
  if (item.firstElementChild) {
    const span = document.createElement('span');

    span.appendChild(document.createTextNode(item.firstChild.nodeValue));
    item.replaceChild(span, item.firstChild);
  }
});

tree.addEventListener('click', hideShow);

function hideShow(ev) {
  const el = ev.target.nextElementSibling;

  if (el.nodeName === 'UL') {
    el.hidden = !el.hidden;
  }
}
