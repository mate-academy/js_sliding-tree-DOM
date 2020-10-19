'use strict';

const tree = document.querySelector('.tree');
const listLi = document.querySelectorAll('li');

for (const li of listLi) {
  if (li.children.length > 0 && li.firstElementChild.tagName === 'UL') {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(li.childNodes[1]);
  }
}

tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const displaySpan = event.target.nextSibling.style;

    if (displaySpan.display !== 'none') {
      displaySpan.display = 'none';
    } else {
      displaySpan.display = 'block';
    }
  }
});
