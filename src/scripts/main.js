'use strict';

const allLi = document.querySelectorAll('li');
const headers = [...allLi].filter(elem => {
  return elem.children.length !== 0;
});

for (const header of headers) {
  const span = document.createElement('span');

  header.prepend(span);
  span.append(span.nextSibling);

  span.addEventListener('click', (e) => {
    const ul = span.parentElement.querySelector('ul');

    ul.hidden = !ul.hidden;
  });
}
