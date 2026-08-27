'use strict';

// write code here
const headLines = [...document.querySelectorAll('.tree li')];

headLines.forEach((line) => {
  const nestedUl = line.querySelector('ul');

  if (nestedUl) {
    const span = document.createElement('span');

    span.append(line.firstChild);

    line.prepend(span);

    span.addEventListener('click', (e) => {
      nestedUl.hidden = !nestedUl.hidden;
    });
  }
});
