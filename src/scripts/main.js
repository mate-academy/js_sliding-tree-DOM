'use strict';

const liTitlesList = document.querySelectorAll('.tree li');

liTitlesList.forEach(li => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.nodeValue;

  li.firstChild.remove();
  li.prepend(span);
});

const list = document.querySelector('.tree');

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const currList = e.target.nextSibling;

  const currListDisplay = currList.style.display;

  if (currListDisplay !== 'none') {
    currList.style.display = 'none';
  } else {
    currList.style.display = 'block';
  }
});
