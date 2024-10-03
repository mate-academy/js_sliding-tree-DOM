'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const headerText = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = headerText;
  item.firstChild.replaceWith(span);

  span.addEventListener('click', function () {
    const nextUL = item.querySelector('ul');

    if (nextUL) {
      nextUL.style.display = nextUL.style.display === 'none' ? 'block' : 'none';
    }
  });
});
