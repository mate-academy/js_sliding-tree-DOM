'use strict';

const tree = document.querySelector('.tree');
let headers = document.querySelectorAll('li');

headers = [...headers].filter((header) => header.querySelector('ul'));

headers.forEach((header) => {
  if (header.hasChildNodes()) {
    const headerText = header.firstChild;
    const span = document.createElement('span');

    span.innerHTML = headerText.textContent;
    header.replaceChild(span, headerText);
  }
});

tree.addEventListener('click', (e) => {
  const closestList = e.target.closest('span');

  if (closestList) {
    const firstChild = closestList.nextSibling;
    const listStyle = firstChild.style;

    if (listStyle.display !== 'none') {
      listStyle.display = 'none';
    } else {
      listStyle.display = '';
    }
  }
});
