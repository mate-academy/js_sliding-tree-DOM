'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const uls = document.querySelectorAll('ul');

  uls.forEach((ul) => {
    const lis = ul.querySelectorAll('li');

    lis.forEach((li) => {
      if (li.childElementCount < 1) {
        return;
      }

      const title = li.firstChild;
      const h2 = document.createElement('span');

      h2.textContent = title.textContent;
      li.replaceChild(h2, title);
      h2.classList.add('title');
    });
  });

  const titles = document.querySelectorAll('.title');

  titles.forEach((title) => {
    title.addEventListener('click', () => {
      const li = title.parentElement;
      const ul = li.querySelector('ul');

      if (!ul) {
        return;
      }

      if (ul.style.display === 'none') {
        ul.style.display = 'block';

        return;
      }

      ul.style.display = 'none';
    });
  });
});
