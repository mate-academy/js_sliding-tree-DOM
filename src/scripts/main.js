'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const headerText = item.firstChild.textContent.trim();
  const span = document.createElement('span');

  span.textContent = headerText;
  item.firstChild.replaceWith(span);

  span.addEventListener('click', function () {
    const nextUl = item.querySelector('ul');

    if (nextUl) {
      nextUl.style.display = nextUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
