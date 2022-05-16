'use strict';

const itemList = document.querySelectorAll('li');

itemList.forEach(item => {
  const list = item.querySelector('ul');

  if (list) {
    const span = document.createElement('span');

    list.style.display = 'none';
    span.innerText = item.firstChild.textContent;
    item.firstChild.remove();
    item.prepend(span);

    span.addEventListener('click', e => {
      const targetUl = e.currentTarget.parentElement.querySelector('ul');

      targetUl.style.display = targetUl.style.display === 'none'
      ? 'block'
      : 'none';
    });
  }
});

















// const listItems = document.querySelectorAll('li');
//
// listItems.forEach(item => {
//   const list = item.querySelector('ul');
//
//   if (list) {
//     const span = document.createElement('span');
//
//     list.style.display = 'none';
//
//     span.innerText = item.firstChild.textContent;
//     item.firstChild.remove();
//     item.prepend(span);
//
//     span.addEventListener('click', e => {
//       const targetUl = e.currentTarget.parentElement.querySelector('ul');
//
//       targetUl.style.display = targetUl.style.display === 'none'
//         ? 'block'
//         : 'none';
//     });
//   }
// });
