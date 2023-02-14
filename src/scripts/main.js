'use strict';

// write code here

const tree = document.querySelector('.tree');

treeRecursion([tree][0]);

function treeRecursion(elem) {
  if (elem.children.length !== 0) {
    const index = elem.innerHTML.indexOf('\n');

    if (index > 0) {
      const oldString = elem.innerHTML.slice(0, elem.innerHTML.indexOf('\n'));

      const temp = `<span>${oldString}</span>`;

      const oldString2 = elem.innerHTML.replace(oldString, temp);

      elem.innerHTML = oldString2;

      elem.children[0].setAttribute('data-toggle-id', oldString);
      elem.children[1].setAttribute('id', oldString);
    }

    for (let i = 0; i < elem.children.length; i++) {
      treeRecursion(elem.children[i]);
    }
  }
}

tree.addEventListener('click', () => {
  const id = event.target.dataset.toggleId;

  if (!id) {
    return;
  }

  const elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});
