'use strict';

const tree = document.querySelector('.tree');
const listPoints = document.querySelectorAll('li');

wrapInSpan(listPoints);

tree.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() !== 'span') {
    return;
  }

  const innerList = e.target.parentNode.querySelector('ul');

  if (innerList) {
    innerList.style.display = innerList.style.display === 'none'
      ? 'block'
      : 'none';
  }
});

function wrapInSpan(items) {
  items.forEach((element) => {
    const newNode = document.createElement('span');

    newNode.innerText = element.firstChild.nodeValue.trim();
    element.removeChild(element.firstChild);
    element.insertAdjacentElement('afterbegin', newNode);
  });
}
