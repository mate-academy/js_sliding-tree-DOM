'use strict';

const headers = document.querySelectorAll('li > ul');

headers.forEach((header) => {
  let listStatus = true;

  const parentLi = header.parentElement;
  const headerText = parentLi.firstChild;

  const span = document.createElement('span');

  span.appendChild(headerText);

  parentLi.insertBefore(span, header);

  span.addEventListener('click', () => {
    if (listStatus) {
      header.style.display = 'none';
      listStatus = false;
    } else {
      header.style.display = 'block';
      listStatus = true;
    }
  });
});
