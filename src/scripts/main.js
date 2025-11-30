'use strict';

const tree = document.querySelector('.tree');
const list = document.querySelectorAll('.tree li ul');

list.forEach((ulElm) => {
  const liElm = ulElm.parentElement;

  const headerTextNode = liElm.firstChild;

  if (!headerTextNode || headerTextNode.nodeType !== 3) {
    return;
  }

  const createSpan = document.createElement('span');

  createSpan.textContent = headerTextNode.textContent.trim();
  createSpan.classList.add('tree-header');
  createSpan.style.cursor = 'pointer';

  liElm.replaceChild(createSpan, headerTextNode);
  ulElm.hidden = true;
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const findLi = e.target.closest('li');
  const findUl = findLi.querySelector('ul');

  if (findUl) {
    // Перемикання властивості hidden
    findUl.hidden = !findUl.hidden;
  }
});
