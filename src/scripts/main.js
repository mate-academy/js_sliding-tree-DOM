'use strict';

// write code here
const liArray = [...document.querySelectorAll('li')];

for (const li of liArray) {
  const children = [...li.childNodes];

  for (const child of children) {
    if (child.nodeType === 3) {
      const span = document.createElement('span');
      const text = child.textContent;

      span.textContent = text;
      child.replaceWith(span);
    }
  }
}

document.addEventListener('click', (e) => {
  const list = e.target.closest('li');

  if (!list) {
    return;
  }

  const closestUl = list.querySelector('ul');

  if (!closestUl) {
    return;
  }

  const currentStatus = closestUl.style.display && 'block';

  closestUl.style.display =
    closestUl.style.display === 'none' ? currentStatus : 'none';
});
