'use strict';
// write code here

const tree = document.querySelector('.tree');
const items = document.querySelectorAll('li');

for (const item of items) {
  const span = document.createElement('span');

  if (item.children.length) {
    span.innerText = item.childNodes[0].data.trim();
    item.childNodes[0].data = '';
    item.insertAdjacentElement('afterbegin', span);
  }
}

function toggleViseble(e) {
  const toggle = e.target.closest('li').querySelector('ul');

  toggle.hidden = !toggle.hidden;
};

tree.addEventListener('click', toggleViseble);
