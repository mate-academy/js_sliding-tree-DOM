'use strict';

const headerItems = document.querySelectorAll('li:has(ul)');
const tree = document.querySelector('.tree');

for (const header of headerItems) {
  const span = document.createElement('span');
  const liText = header.childNodes[0].textContent;

  span.textContent = liText;

  header.replaceChild(span, header.childNodes[0]);
}

tree.addEventListener('click', (eve) => {
  const currentTarget = eve.target;

  if (currentTarget.tagName === 'SPAN') {
    const nestedUI = currentTarget.parentNode.querySelector('ul');

    if (nestedUI.style.display === 'none') {
      nestedUI.style.display = '';
    } else {
      nestedUI.style.display = 'none';
    }
  }
});
