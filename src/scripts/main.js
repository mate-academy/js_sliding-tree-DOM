'use strict';

// write code here
const listElemWithUL = [...document.querySelectorAll('li')];

for (const elem of listElemWithUL) {
  const span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);

  span.addEventListener('click', click => {
    const item = click.target.closest('span');

    if (item) {
      const title = click.target.parentElement.children[1];

      title.hidden = !title.hidden;
    };
  });
};
