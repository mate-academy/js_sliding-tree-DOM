'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');
  const listUlInLi = li.querySelectorAll('ul');

  if (listUlInLi.length) {
    li.prepend(span);
    span.append(span.nextSibling);
  }
}

const spanList = document.querySelectorAll('span');

spanList.forEach(el => {
  el.addEventListener('click', (e) => {
    const displayStatus = e.target.parentNode.querySelector('ul').style.display;

    e.target.parentNode
      .querySelector('ul').style.display = displayStatus !== 'none'
        ? 'none'
        : 'block';
  });
});
