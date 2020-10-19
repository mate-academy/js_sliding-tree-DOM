'use strict';

const treeList = document.querySelector('.tree');
const treeElements = document.querySelectorAll('li');
const elementsText = treeList.innerText.split('\n');

treeList.style.position = 'absolute';
treeList.style.top = treeList.getBoundingClientRect().top + 'px';
treeList.style.left = treeList.getBoundingClientRect().left + 'px';

treeElements.forEach((element, i) => {
  element.firstChild.remove();

  element.insertAdjacentHTML('afterbegin', `
  <span>${elementsText[i]}</span>
  `);
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
