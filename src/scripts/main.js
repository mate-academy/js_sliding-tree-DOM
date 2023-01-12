'use strict';

const tree = document.querySelector('.tree');
const liContainer = document.querySelectorAll('li');

for (const li of liContainer) {
  if (li.children) {
    const span = document.createElement('span');

    li.after(span);
    span.appendChild(li);
  }
}

tree.addEventListener('click', (ev) => {
  const container = ev.target.querySelector('ul');

  container.hidden = !container.hidden;
});
