'use strict';

// const tree = document.querySelector('.tree');

// const listItems = document.querySelectorAll('li');

// for (const listItem of listItems) {
//   if (listItem.children.length > 0) {
//     listItem.addEventListener('click', (event) => {
//       if (event.target === listItem) {
//         const ul = event.target.querySelector('ul');

//         if (ul.style.display === 'none') {
//           ul.style.display = 'block';
//         } else {
//           ul.style.display = 'none';
//         }
//       }
//       // ul.hidden = !ul.hidden;
//     });
//   }
// }

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

for (const listItem of listItems) {
  const span = document.createElement('span');

  listItem.insertBefore(span, listItem.firstChild);
  span.appendChild(span.nextSibling);
}

tree.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'SPAN') {
    const item = target.nextSibling;
    const hidden = window.getComputedStyle(item).display === 'none';

    if (hidden) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});
