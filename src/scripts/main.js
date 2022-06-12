'use strict';

const liElements = document.querySelectorAll('li');

for (const li of liElements) {
  li.addEventListener('click', e => {
    e.stopPropagation();

    if (li.children.length > 0) {
      const ul = li.querySelector('ul');

      if (ul.style.display === 'none') {
        ul.style.display = 'block';
        li.style.fontWeight = 'normal';
      } else {
        ul.style.display = 'none';
        li.style.fontWeight = 'bold';
      }
    }
  });
}
