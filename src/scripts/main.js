'use strict';

const tree = document.querySelector('.tree');

const treeLi = [...tree.querySelectorAll('li')];

// variant_1
// treeLi.forEach((item, i) => {
//   const span = document.createElement('span');

//   item.prepend(span);
//   span.prepend(span.nextSibling);
// });

// tree.addEventListener('click', (e) => {
//   if (e.target.tagName === 'SPAN') {
//     const el = e.target.nextSibling;

//     if (el) {
//       el.hidden = !el.hidden;
//     }
//   }
// });

// variant_2
treeLi.forEach((item, i) => {
  if (item.children.length > 0) {
    const nameItem = `<span>${item.firstChild.textContent.trim()}</span>`;

    item.firstChild.textContent = '';
    item.insertAdjacentHTML('afterbegin', nameItem);
  }
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const el = e.target.nextElementSibling;

    if (el) {
      el.hidden = !el.hidden;
    }
  }
});
