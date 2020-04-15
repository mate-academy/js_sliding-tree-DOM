'use strict';

const tree = document.querySelector('.tree');
const listOfLi = document.querySelectorAll('li');

for (const li of listOfLi) {
  const span = document.createElement('span');

  span.classList.add('bold-text');
  span.append(li.firstChild);
  li.prepend(span);
}

tree.addEventListener('click', (arg) => {
  const ul = arg.target.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
