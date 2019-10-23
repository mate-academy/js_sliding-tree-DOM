'use strict';

const tree = document.querySelector('.tree');
const liArray = document.querySelectorAll('li');

for (const el of liArray) {
  if (el.children.length) {
    el.className = 'closed';
  }
}

tree.addEventListener('click', function(event) {
  const requiredItem = event.target;
  if (requiredItem.tagName !== 'LI') {
    return;
  }
  if (requiredItem.children.length) {
    requiredItem.classList.toggle('closed');
    requiredItem.classList.toggle('open');
  }
});
