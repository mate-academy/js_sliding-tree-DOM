'use strict';

// write code here
const tree = document.querySelector('.tree');
const allLiItems = document.querySelectorAll('li');

for (const liItem of allLiItems) {
  if (liItem.childNodes.length > 1) {
    const span = document.createElement('span');

    span.dataset.clickable = true;
    span.innerText = liItem.firstChild.textContent;
    liItem.firstChild.remove();
    liItem.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  if (!e.target.dataset.clickable) {
    return;
  }

  const item = e.target.closest('li');
  const listsToHide = item.querySelectorAll('ul');

  listsToHide.forEach((list) => {
    if (list.style.display === 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });
});
