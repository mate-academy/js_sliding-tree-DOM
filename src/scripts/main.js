'use strict';

const tree = document.querySelector('.tree');

const li = tree.querySelectorAll('li');

li.forEach((item) => {
  if (item.querySelector('li')) {
    const spanElem = document.createElement('span');
    const changed = item.childNodes[0].textContent.trim();

    spanElem.textContent = changed;

    item.removeChild(item.childNodes[0]);
    item.insertBefore(spanElem, item.childNodes[0]);
  }
});

const span = document.querySelectorAll('span');

span.forEach((item) => {
  const list = item.nextElementSibling;

  list.style.display = 'block';

  item.addEventListener('click', () => {
    if (list.style.display === 'block') {
      list.style.display = 'none';
    } else {
      list.style.display = 'block';
    }
  });
});
