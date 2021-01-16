'use strict';

const tree = document.querySelector('.tree');
const ul = document.querySelectorAll('ul');

for (let i = 0; i < ul.length; i++) {
  for (const child of ul[i].children) {
    const span = document.createElement('span');
    const text = child.firstChild.textContent;

    child.firstChild.remove();

    child.prepend(span);
    span.textContent = text;
  }
}

tree.addEventListener('click', e => {
  const target = e.target.closest('span');

  if (!target) {
    return null;
  } else {
    const nextElement = target.nextElementSibling;

    if (nextElement === null) {
      return;
    }

    nextElement.hidden = !nextElement.hidden;
  }
});
