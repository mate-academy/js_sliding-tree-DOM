'use strict';

const liList = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

liList.forEach(elem => {
  const span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);
});

tree.addEventListener('click', function() {
  const ul = event.target.closest('li').querySelector('ul');

  if (!ul) {
    return;
  }

  ul.classList.toggle('hidden');
});
