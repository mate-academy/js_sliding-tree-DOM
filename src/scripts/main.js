'use strict';

const tree = document.getElementsByClassName('tree')[0];

for (const li of tree.getElementsByTagName('li')) {
  if (!isExpandable(li)) {
    continue;
  }

  const span = document.createElement('span');
  const firstChildNode = li.firstChild.cloneNode();

  span.appendChild(firstChildNode);

  span.addEventListener('click', (e) => {
    e.target.parentElement.querySelector('ul').hidden
      = !e.target.parentElement.querySelector('ul').hidden;
  });
  li.replaceChild(span, li.firstChild);
}

function isExpandable(element) {
  return element.children.length > 0;
}
