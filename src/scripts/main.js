'use strict';

// write code here

const mainList = [...document.querySelectorAll('li')].filter(
  el => el.firstElementChild
);

for (const element of mainList) {
  const span = document.createElement('span');

  const firstChild = element.firstChild;

  firstChild.after(span);
  span.appendChild(firstChild);

  span.addEventListener('click', e => {
    if (element.children[1].style.display === 'none') {
      element.children[1].style.display = 'block';
    } else {
      element.children[1].style.display = 'none';
    }
  }
  );
}
