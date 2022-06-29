'use strict';

// write code here

const tree = document.querySelector('.tree');

tree.style.cssText = `
  position: absolute;
  top: 10px;
  left: 30px;
`;

const li = document.querySelectorAll('li');

for (const ch of li) {
  const span = document.createElement('span');

  ch.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const ul = e.target.nextElementSibling;

  if (ul.tagName === 'UL') {
    ul.hidden = !ul.hidden;
  }
});
