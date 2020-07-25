'use strict';

const list = document.querySelector('.tree');
const items = list.querySelectorAll('li');

[...items].forEach(item => {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);

    const header = item.querySelector('span');

    header.append(item.childNodes[1]);

    header.addEventListener('click', () => {
      const ul = item.querySelector('ul');

      if (document.getComputedStyle(ul).display === 'none') {
        ul.style.display = 'block';

        return;
      }

      ul.style.display = 'none';
    });
  }
});
