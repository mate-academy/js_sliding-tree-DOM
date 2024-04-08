'use strict';

function toggleDisplay(listEvent) {
  const list = listEvent.target.nextSibling;

  if (list) {
    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  }
}

const items = document.querySelectorAll('li');

items.forEach((item) => {
  const span = document.createElement('span');

  span.addEventListener('click', toggleDisplay);
  span.innerText = item.firstChild.nodeValue.trim();
  item.firstChild.replaceWith(span);
});
