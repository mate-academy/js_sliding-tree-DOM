'use strict';

const listArr = document.querySelectorAll('li');

listArr.forEach(list => {
  const span = document.createElement('span');

  span.append(list.firstChild);

  list.insertAdjacentElement('afterbegin', span);
});

document.addEventListener('click', e => {
  if (e.target.closest('span')) {
    const listItem = e.target.parentElement;

    if (listItem.lastElementChild.style.display === 'none') {
      listItem.lastElementChild.style.display = 'block';
    } else {
      listItem.lastElementChild.style.display = 'none';
    }
  }
});
