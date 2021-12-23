'use strict';

// write code here
const list = document.querySelector('.tree');

for (const li of list.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

list.addEventListener('click', (e) => {
  const container = e.target.parentNode.querySelector('ul');

  container.hidden = !container.hidden;
});
