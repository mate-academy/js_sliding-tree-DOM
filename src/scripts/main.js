'use strict';

// write code here
const treeItems = document.querySelectorAll('li');

treeItems.forEach(item => {
  const ulElement = item.querySelector('ul');

  if (ulElement) {
    const span = document.createElement('span');

    span.innerText = item.firstChild.textContent.trim();
    item.firstChild.remove();
    item.insertBefore(span, ulElement);

    span.addEventListener('click', () => {
      if (ulElement.style.display === 'none') {
        ulElement.style.display = 'block';
      } else {
        ulElement.style.display = 'none';
      }
    });
  }
});
