'use strict';

const listElements = document.querySelectorAll('li');

for (const listElement of listElements) {
  if (listElement.childElementCount > 0) {
    const span = document.createElement('span');

    span.innerText = listElement.firstChild.data;
    listElement.firstChild.replaceWith(span);

    span.onclick = function(e) {
      if (e.target.nextSibling.style.display !== 'none') {
        e.target.nextSibling.style.display = 'none';
      } else {
        e.target.nextSibling.style.display = 'block';
      }
    };
  }
}
