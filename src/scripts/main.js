'use strict';

const tree = document.querySelectorAll('.tree li');

for (const key of tree) {
  const span = document.createElement('span');

  span.textContent = key.firstChild.textContent;
  key.firstChild.textContent = '';
  key.insertAdjacentElement('afterbegin', span);

  span.addEventListener('click', () => {
    const keys = key.querySelectorAll('ul');

    keys.forEach((element) => (element.hidden = !element.hidden));
  });
}
