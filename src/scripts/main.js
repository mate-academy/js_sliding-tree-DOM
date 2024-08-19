'use strict';

// write code here
const list = document.getElementsByClassName('tree')[0];

list.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (span) {
    const current = span.closest('li');

    const subList = current.querySelector('ul');

    if (subList) {
      subList.hidden = !subList.hidden;
    }
  }
});
