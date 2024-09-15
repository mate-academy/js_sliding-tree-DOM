'use strict';

document.querySelectorAll('li').forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.firstChild.replaceWith(span);

  span.addEventListener('click', (e) => {
    const subList = li.querySelector('ul');

    if (subList) {
      subList.hidden = !subList.hidden;
    }
  });
});
