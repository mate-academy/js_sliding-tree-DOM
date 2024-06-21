'use strict';

let headers = document.querySelectorAll('li:has(ul)');

headers.forEach((header) => {
  const headerText = header.firstChild;
  const newSpan = document.createElement('span');

  newSpan.className = 'list-header';
  newSpan.appendChild(document.createTextNode(headerText.nodeValue));
  header.replaceChild(newSpan, headerText);
});

headers = document.querySelectorAll('.list-header');

function handleHeaderClick(e) {
  const list = e.target.nextElementSibling;

  if (list.style.display) {
    list.style.display = '';
  } else {
    list.style.display = 'none';
  }
}

headers.forEach((header) => {
  header.addEventListener('click', handleHeaderClick);
});
