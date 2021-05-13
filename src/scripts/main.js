'use strict';

const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
  if (li[i].children.length > 0) {
    const span = document.createElement('span');

    span.innerText = li[i].firstChild.textContent.trim();

    span.addEventListener('click', e => {
      span.nextSibling.style.display = 'none';
    });

    li[i].replaceChild(span, li[i].firstChild);
  }
}
