'use strict';

const mainList = document.querySelector('.tree');

function wrap(element) {
  const lists = element.querySelectorAll('li');

  lists.forEach((li) => {
    const ul = li.querySelector('ul');

    if (ul) {
      const titleText = li.firstChild.textContent.trim();
      const span = document.createElement('span');

      span.textContent = titleText;
      li.firstChild.textContent = '';
      li.insertBefore(span, li.firstChild);

      span.addEventListener('click', function () {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
}

wrap(mainList);
