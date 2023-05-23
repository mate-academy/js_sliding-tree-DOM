'use strict';

const listArr = document.querySelectorAll('li');

listArr.forEach(list => {
  const span = document.createElement('span');

  span.append(list.firstChild);

  list.insertAdjacentElement('afterbegin', span);
});

document.addEventListener('click', evetio => {
  if (evetio.target.tagName === 'SPAN') {
    const eventParent = evetio.target.parentElement;

    eventParent.innerHTML = ``;

    eventParent.append(evetio.target);
  }
});
