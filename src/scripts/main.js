'use strict';

// write code here

const tree = document.querySelector('.tree');

treeRecursion([tree][0]);

function treeRecursion(elem) {
  if (!elem.children.length) {
    return;
}

if (elem.tagName === 'LI') {
  const nameIdSpan = elem.firstChild.data.trim();
  const spannedName = `<span>${nameIdSpan}</span>`;

  const newInnerHtml = elem.innerHTML.replace(nameIdSpan, spannedName);

  elem.innerHTML = newInnerHtml;

  elem.children[0].setAttribute('data-toggle-id', nameIdSpan);
  elem.children[1].setAttribute('id', nameIdSpan);
}

for (let i = 0; i < elem.children.length; i++) {
  treeRecursion(elem.children[i]);
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
