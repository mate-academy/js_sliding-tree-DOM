'use strict';

const treeList = document.querySelector('.tree');
const treeHeaderElements = [...document.querySelectorAll('li')]
  .filter(element => {
    const childElement = element.querySelector('ul');

    return !!childElement;
  });

treeList.style.position = 'absolute';
treeList.style.top = treeList.getBoundingClientRect().top + 'px';
treeList.style.left = treeList.getBoundingClientRect().left + 'px';

treeHeaderElements.forEach((element) => {
  const innerText = element.firstChild;
  const spanElement = document.createElement('span');

  spanElement.append(innerText);
  element.prepend(spanElement);
});

const spanElements = document.querySelectorAll('span');

spanElements.forEach(element => {
  element.addEventListener('click', (event) => {
    const selectedElementSibling = event.target.nextElementSibling;

    if (selectedElementSibling) {
      const isHidden = selectedElementSibling.hidden;

      selectedElementSibling.hidden = !isHidden;
    }
  });
});
