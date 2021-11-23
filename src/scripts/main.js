'use strict';

// write code here

const elements = document.querySelectorAll('li');

for (const element of elements) {
  if (element.childElementCount < 1) {
    continue;
  }

  element.insertAdjacentHTML('afterbegin',
    `<span>
      ${element.childNodes[0].textContent}
    </span>`
  );

  element.childNodes[1].textContent = '';
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (e) => {
  const clickPoint = e.target.closest('span');

  if (!clickPoint) {
    return;
  }

  const nestedList = clickPoint.parentElement.children[1].children;

  for (const element of nestedList) {
    if (element.hidden === false) {
      element.hidden = true;
    } else {
      element.hidden = false;
    }
  }
});
