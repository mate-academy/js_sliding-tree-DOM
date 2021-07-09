'use strict';

const tree = document.querySelector('.tree');
const listItems = document.querySelectorAll('li');

for (const item of listItems) {
  if (item.children.length) {
    const span = document.createElement('span');
    const rest = item.childNodes[1];

    span.append(item.childNodes[0]);
    item.append(span, rest);
  };
};

tree.addEventListener('click', e => {
  const heading = e.target.closest('span');

  if (!heading || !tree.contains(heading)) {
    return false;
  } else {
    heading.nextSibling.hidden = !heading.nextSibling.hidden;
  };
});
