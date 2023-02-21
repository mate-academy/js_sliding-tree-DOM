'use strict';

const treeMain = document.querySelector('.tree');
const li = document.querySelectorAll('li');
const tree = [...li].filter(el => el.childElementCount);

for (let i = 0; i < tree.length; i++) {
  const header = Array.from(tree[i].childNodes)
    .filter(node => node.nodeType === 3 && node.textContent.trim().length > 1);

  header.forEach(node => {
    const span = document.createElement('span');

    node.after(span);
    span.appendChild(node);
    span.setAttribute('data-toggle-id', `${span.textContent}`.trim());

    if (!tree[i].children.length) {
      return;
    }

    tree[i].children[1].setAttribute('id',
      tree[i].children[0].textContent.trim());

    treeRecursion([tree[i]][0]);

    function treeRecursion(elem) {
      for (let k = 0; k < elem.children.length; k++) {
        treeRecursion(elem.children[k]);
      }
    }
  });
}

treeMain.addEventListener('click', (e) => {
  const id = e.target.dataset.toggleId;

  if (!id) {
    return;
  }

  const elem = document.getElementById(id);

  elem.hidden = !elem.hidden;
});
