'use strict';

const listItems = document.querySelectorAll('.tree li');

listItems.forEach((item) => {
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.replaceWith(span);

  span.addEventListener('click', (e) => {
    const subList = item.querySelector('ul');

    if (subList) {
      subList.style.display =
        subList.style.display === 'none' ? 'block' : 'none';
    }

    e.stopPropagation();
  });
});
