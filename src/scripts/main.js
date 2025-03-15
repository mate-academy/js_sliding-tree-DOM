'use strict';

const items = document.querySelectorAll('li > ul');

items.forEach((ul) => {
  const li = ul.parentElement;
  const span = document.createElement('span');

  span.textContent = li.childNodes[0].textContent.trim();
  li.childNodes[0].textContent = '';
  li.prepend(span);

  span.addEventListener('click', () => {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      const currentDisplay = nestedUl.style.display;

      nestedUl.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
  });
});
