'use strict';

const tree = document.querySelector('.tree');
const arrayOfLi = document.querySelectorAll('li');

for (const li of arrayOfLi) {
  const span = document.createElement('SPAN');

  li.prepend(span);
  span.append(li.childNodes[1]);
}

tree.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    const element = event.target.nextSibling;

    if (element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
});
