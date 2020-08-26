'use strict';

const tree = document.querySelector('.tree');

tree.style.cssText = `
  position: absolute;
  top: 5%;
  left: 40%;
`;

for (const item of tree.querySelectorAll('li')) {
  if (item.querySelector('ul')) {
    const span = document.createElement('span');

    item.prepend(span);
    span.append(span.nextSibling);
  }
}

tree.addEventListener('click', (event) => {
  const ul = event.target.nextElementSibling;

  if (ul.tagName === 'UL') {
    ul.hidden = !ul.hidden;
  }
});
