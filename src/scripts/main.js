'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//   const treeItems = document.querySelectorAll('.tree li');

//   treeItems.forEach((li) => {
//     const nestedUl = li.querySelector('ul');

//     if (nestedUl) {
//       const textContent = Array.from(li.childNodes)
//         .filter((node) => node.nodeType === Node.TEXT_NODE)
//         .map((node) => node.textContent.trim())
//         .join(' ')
//         .trim();

//       if (textContent) {
//         const span = document.createElement('span');

//         span.textContent = textContent;

//         Array.from(li.childNodes)
//           .filter((node) => node.nodeType === Node.TEXT_NODE)
//           .forEach((node) => node.remove());
//         li.insertBefore(span, nestedUl);

//         span.addEventListener('click', () => {
//           nestedUl.style.display =
//             nestedUl.style.display === 'none' ? 'block' : 'none';
//         });
//         // nestedUl.style.display = 'block';
//       }
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.tree li');

  treeItems.forEach((li) => {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      const span = document.createElement('span');

      while (li.firstChild && li.firstChild !== nestedUl) {
        span.appendChild(li.firstChild);
      }

      li.insertBefore(span, nestedUl);

      // nestedUl.style.display = 'none';

      span.addEventListener('click', () => {
        nestedUl.style.display =
          nestedUl.style.display === 'none' ? 'block' : 'none';
      });
    }
  });
});
