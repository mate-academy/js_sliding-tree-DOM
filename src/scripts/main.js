'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

for (const item of li) {
  if (item.children.length > 0) {
    const span = document.createElement('span');
    span.textContent = item.childNodes[0].nodeValue.trim();
    item.childNodes[0].nodeValue = '';
    item.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (e.target.closest('span')) {
    const ul = e.target.nextElementSibling;
    const hiddenStatus = ul.hidden;

    ul.hidden = !hiddenStatus;
  }
});
