'use strict';

const ul = document.querySelector('ul');
const listLi = document.querySelectorAll('li');

for (const li of listLi) {
  if (li.querySelector('ul')) {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  }
}

ul.addEventListener('click', (even) => {
  if (even.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = even.target.parentNode.querySelector('ul');

  if (!childrenList) {
    return;
  }

  childrenList.hidden = !childrenList.hidden;
});
