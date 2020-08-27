'use strict';

const list = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
const span = document.createElement('span');

for (const li of [...liElements]) {
  li.prepend(span.cloneNode());
  li.childNodes[0].append(li.childNodes[1]);
}

list.addEventListener('click', (event) => {
  const innerList = event.target.nextElementSibling;

  if (event.target.tagName === 'SPAN' && innerList !== null) {
    innerList.hidden = !innerList.hidden;
  }
});
