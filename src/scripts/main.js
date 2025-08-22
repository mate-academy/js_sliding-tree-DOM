'use strict';

const tree = document.querySelector('.tree');

const liArray = tree.querySelectorAll('li');

for (const li of liArray) {
  const span = document.createElement('span');
  const name1 = li.firstChild;

  span.textContent = name1.textContent.trim();
  li.replaceChild(span, name1);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const text = e.target.nextSibling;

    if (text && text.tagName === 'UL') {
      text.hidden = !text.hidden; // як це працює
    }
  }
});

// tree.addEventListener('click', (e) => {
//   const li = e.target;
//   const span = document.createElement('span');
//   const header = li.firstChild;
//   const headerText = header.textContent.trim();
//   const innerUL = li.querySelector('ul');

//   if (e.target.tagName === 'LI') {
//     span.textContent = headerText;
//     li.insertBefore(span, header);

//     if (innerUL) {
//       innerUL.hidden = true;
//       header.remove();
//     }
//   }

//   if (e.target.tagName === 'SPAN') {
//     li.insertBefore(span, headerText);
//     innerUL.hidden = false;
//     span.remove();
//   }
// });
