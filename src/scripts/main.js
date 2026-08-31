'use strict';

const words = document.querySelectorAll('li');

for (const word of words) {
  const newNode = document.createElement('span');

  newNode.textContent = word.firstChild.textContent;
  word.firstChild.replaceWith(newNode);

  newNode.addEventListener('click', (e) => {
    if (word.lastElementChild.nodeName === 'UL') {
      if (word.lastElementChild.style.display === 'none') {
        word.lastElementChild.style.display = '';
      } else {
        word.lastElementChild.style.display = 'none';
      }
    }
  });
}
