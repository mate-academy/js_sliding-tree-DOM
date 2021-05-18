'use strict';

wrapInSpan(document.querySelectorAll('li'));

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() !== 'span') {
    return;
  }

  const nestedList = e.target.parentNode.querySelector('ul');

  if (nestedList) {
    nestedList.style.display = nestedList.style.display === 'none'
      ? 'block'
      : 'none';
  }
});

function wrapInSpan(items) {
  items.forEach((element) => {
    const newNode = document.createElement('span');

    newNode.innerText = element.firstChild.nodeValue.trim();
    element.replaceChild(newNode, element.firstChild);
  });
}
