'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('li');

  listItems.forEach((li) => {
    const span = document.createElement('span');

    span.textContent = li.firstChild.nodeValue.trim();
    li.firstChild.replaceWith(span);

    const subList = li.querySelector('ul');

    span.addEventListener('click', function () {
      if (subList) {
        const isHidden = subList.style.display === 'none';

        subList.style.display = isHidden ? 'block' : 'none';
      }
    });
  });
});
