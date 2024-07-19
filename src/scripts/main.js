'use strict';

const liItems = document.querySelectorAll('li');

liItems.forEach((item) => {
  const headerText = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = headerText;
  item.firstChild.replaceWith(span);

  span.addEventListener('click', function () {
    const list = item.querySelector('ul');

    if (list) {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
    }
  });
});
