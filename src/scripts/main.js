'use strict';

const lists = document.querySelectorAll('ul');

for (const list of lists) {
  for (const li of list.children) {
    if (li.children.length) {
      const span = document.createElement('span');

      span.prepend(li.firstChild);
      span.className = 'toggler';
      li.prepend(span);
    }
  }
}

let flagToogler = true;

document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', (event) => {
    event.stopPropagation();

    if (event.target.className !== 'toggler') {
      return;
    }

    if (flagToogler) {
      li.children[1].style.cssText = `
        display: none;
      `;
      flagToogler = false;
    } else {
      li.children[1].style.cssText = `
        display: block;
      `;
      flagToogler = true;
    }
  });
});
