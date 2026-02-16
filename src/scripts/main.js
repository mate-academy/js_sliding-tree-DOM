'use strict';

// write code here

function slidingTree() {
  const tree = document.querySelector('.tree');

  if (!tree) {
    return;
  }

  for (const li of tree.querySelectorAll('li')) {
    let textNode = null;

    for (const node of li.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim()) {
        textNode = node;
        break;
      }
    }

    if (!textNode) {
      continue;
    }

    const title = textNode.textContent.trim();
    const span = document.createElement('span');

    span.textContent = title;

    textNode.replaceWith(span);
  }

  tree.addEventListener('click', (e) => {
    const titleSpan = e.target.closest('span');

    // guard: click not on a title span
    if (!titleSpan || !tree.contains(titleSpan)) {
      return;
    }

    const li = titleSpan.closest('li');

    if (!li) {
      return;
    }

    const childUl = Array.from(li.children).find((el) => el.tagName === 'UL');

    if (!childUl) {
      return;
    }

    childUl.hidden = !childUl.hidden;
  });
}

slidingTree();
