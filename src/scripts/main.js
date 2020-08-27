'use strict';

const list = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
const span = document.createElement('span');

for (const li of [...liElements]) {
  li.prepend(span.cloneNode());
  li.childNodes[0].append(li.childNodes[1]);
}

list.addEventListener('click', (event) => {
  const parentOfTarget = event.target.parentElement;
  const innerList = parentOfTarget.querySelector('ul');
  const tagName = event.target.tagName;

  if (tagName === 'UL' || tagName === 'LI') {
    return;
  }

  if (innerList !== null) {
    innerList.hidden = !innerList.hidden;
  }
});
