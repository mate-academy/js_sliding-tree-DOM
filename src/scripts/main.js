'use strict';

const ul = document.querySelector('.tree');
const arrayOfLi = document.querySelectorAll('li');

for (const li of arrayOfLi) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(li.childNodes[1]);
}

ul.addEventListener('click', onClick);

function onClick(e) {
  const target = e.target;
  const child = target.parentNode.querySelector('ul');

  if (target.tagName === 'SPAN') {
    child.hidden = !child.hidden;
  } else {
    return;
  };
};
