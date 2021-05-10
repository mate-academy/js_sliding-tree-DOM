'use strict';

const list = document.querySelectorAll('li');

const arrayList = [...list];

for (const item of arrayList) {
  const text = item.firstChild.data;
  const ul = item.querySelector('ul');

  if (ul) {
    item.firstChild.remove();
    item.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', e => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const elem = span.nextElementSibling;

  elem.hidden = !elem.hidden;
});
