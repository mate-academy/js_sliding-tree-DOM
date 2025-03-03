'use strict';

const tree = document.querySelector('.tree');

tree.onclick = (ev) => {
  const list = ev.target.nextSibling;
  // const test = findUl(ev.target);

  if (list) {
    list.hidden = !list.hidden;
  }
};

function spanElements() {
  const liElements = tree.querySelectorAll('li');

  liElements.forEach((li) => {
    const span = document.createElement('span');

    li.prepend(span);
    span.append(span.nextSibling);
  });
}

spanElements();

// function findUl(node) {
//   const father = node.parentNode;
//   const ul = father.querySelector('ul');

//   if (ul) {
//     return ul;
//   } else {
//     findUl(father);
//   }
// }
