'use strict';

// write code here
const allLiElements = [...document.querySelectorAll('li')];

for (const element of allLiElements) {
  if (element.querySelector('ul') === null) {
    continue;
  }

  const elementChilds = [...element.childNodes];
  const span = document.createElement('span');

  span.textContent = elementChilds[0].textContent;
  elementChilds[0].replaceWith(span);
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const span = e.target;
  const li = span.parentElement;
  const ul = li.querySelector('ul');

  if (ul.style.display === 'none') {
    ul.style.display = '';
  } else {
    ul.style.display = 'none';
  }
});
