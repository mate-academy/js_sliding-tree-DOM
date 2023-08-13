'use strict';

const tree = document.querySelector('.tree');

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  span.classList.add('title');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  if (!e.target.classList.contains('title')) {
    return;
  }

  const neighbor = e.target.nextElementSibling;

  if (!neighbor) {
    return;
  }

  if (neighbor.style.display === 'none') {
    neighbor.style.display = 'block';
  } else {
    neighbor.style.display = 'none';
  }
});
