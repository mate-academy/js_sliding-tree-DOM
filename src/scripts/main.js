'use strict';

const tree = document.querySelector('.tree');
const treeItems = tree.querySelectorAll('.tree li');

treeItems.forEach((element) => {
  const spanElement = document.createElement('span');

  spanElement.innerHTML = element.firstChild.textContent;

  element.insertBefore(spanElement, element.firstChild);

  if (element.firstChild.nextSibling) {
    element.firstChild.nextSibling.remove();
  }

  spanElement.addEventListener('click', (e) => {
    const nextEl = e.target.nextElementSibling;

    if (!nextEl) {
      return;
    }
    nextEl.style.display = nextEl.style.display === 'none' ? 'block' : 'none';
  });
});

// tree.addEventListener('click', (e) => {
//   const ul = e.target.querySelector('ul');

//   if (!ul) {
//     return;
//   }

//   if (ul.style.display === 'none') {
//     ul.style.display = 'block';
//   } else {
//     ul.style.display = 'none';
//   }
// });
