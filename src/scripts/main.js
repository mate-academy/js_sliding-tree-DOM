'use strict';

// write code here
const ulCollections = document.querySelectorAll('ul:not(.tree)');

ulCollections.forEach((oneUl) => {
  const header = oneUl.parentElement.firstChild;

  const $collapsableSpan = document.createElement('span');

  $collapsableSpan.addEventListener('click', (e) => {
    oneUl.hidden = !oneUl.hidden;
  });

  $collapsableSpan.textContent = header.textContent.trim();
  oneUl.parentElement.replaceChild($collapsableSpan, header);
});
