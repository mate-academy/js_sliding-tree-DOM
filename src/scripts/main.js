'use strict';

const liRows = document.querySelectorAll('li');

liRows.forEach((row) => {
  const names = row.childNodes[0].textContent;
  const spanTeg = document.createElement('span');

  row.childNodes[0].textContent = '';
  spanTeg.textContent = names;

  if (row.children.length === 0) {
    row.append(spanTeg);
  } else {

  }
  row.children[0].before(spanTeg);
});

const namesSpan = document.querySelectorAll('span');

namesSpan.forEach((nameSpan) => {
  nameSpan.addEventListener('click', (events) => {
    if (nameSpan.parentElement.children.length > 1) {
      nameSpan.parentElement.lastElementChild.hidden
        = !nameSpan.parentElement.lastElementChild.hidden;
    }
  });
});
