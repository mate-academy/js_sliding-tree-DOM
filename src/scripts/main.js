'use strict';

const tree = document.querySelector('.tree');
const listItems = Array.from(tree.querySelectorAll('li'));
let span;

for (const item of listItems) {
  const childNodes = Array.from(item.childNodes);

  for (const node of childNodes) {
    if (node.nodeType === 3) {
      span = document.createElement('span');
      span.textContent = node.textContent;
      item.replaceChild(span, node);
    }
  }
}

const style = document.createElement('style');

style.innerHTML = `
  .hidden {
    display: none;
  }
`;

document.head.appendChild(style);

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const tarLi = e.target.parentElement;
    const tarUl = tarLi.querySelector('ul');

    if (tarUl) {
      tarUl.classList.toggle('hidden');
    }
  }
});
