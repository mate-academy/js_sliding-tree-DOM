'use strict';

const getLiWithUl = [...document.querySelectorAll('li')];

for (const elem of getLiWithUl) {
  const span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);

  span.addEventListener('click', cl => {
    const item = cl.target.closest('span');

    if (!item) {
      return;
    };

    const title = cl.target.parentElement.children[1];

    title.hidden = !title.hidden;
  });
};
