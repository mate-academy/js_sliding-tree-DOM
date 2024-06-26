'use strict';

const tree = document.querySelector('.tree');

function toggleDisplay(headingLi) {
  const ul = headingLi.querySelector('ul');

  if (ul) {
    ul.style.display =
      ul.style.display === 'none' || ul.style.display === '' ? 'block' : 'none';
  }
}

tree.addEventListener('click', function (e) {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  toggleDisplay(li);
});
