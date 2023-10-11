'use strict';

const tree = document.querySelector('.tree');
const element = tree.querySelectorAll('li');

for (const li of element) {
  const span = document.createElement('span');

  span.classList.add('title');

  li.prepend(span);
  span.append(span.nextSibling);

  tree.addEventListener('click', e => {
    if (!e.target.classList.contains('title')) {
      return;
    }

    if (e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  });
}
