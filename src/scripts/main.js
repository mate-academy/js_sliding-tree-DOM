'use strict';

const tree = document.querySelector('.tree');
const hidder = (e) => {
  if (e.target.tagName.includes('SPAN')) {
    const sublist = e.target.parentNode.querySelector('ul');

    if (sublist) {
      sublist.hidden = !sublist.hidden;
    }
  }
};

for (const li of tree.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener('click', hidder);
