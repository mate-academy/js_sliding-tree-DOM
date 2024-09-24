'use strict';

const list = document.querySelectorAll('.tree li');

list.forEach((li) => {
  const nestedList = li.querySelector('ul');

  if (nestedList) {
    const span = document.createElement('span');

    span.textContent = li.firstChild.textContent.trim();
    li.firstChild.replaceWith(span);

    nestedList.style.display = 'block';

    span.addEventListener('click', () => {
      nestedList.style.display =
        nestedList.style.display === 'block' ? 'none' : 'block';
    });
  }
});
