'use strict';

const tree = document.querySelector('.tree');
const allTreeChild = [];
const allSiblings = [];

if (tree && tree.children) {
  for (const child of tree.children) {
    allTreeChild.push(child);

    if (child.querySelector('ul') && child.querySelector('ul').children) {
      for (const sibling of child.querySelector('ul').children) {
        allSiblings.push(sibling);
      }
    }
  }
}

function hideLi(liToHide) {
  const newSpan = document.createElement('span');

  const textNode = Array.from(liToHide.childNodes).find(
    (node) =>
      node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0,
  );

  if (!textNode) {
    return;
  }

  const textContent = textNode.textContent;

  textNode.remove();

  newSpan.textContent = textContent;

  liToHide.prepend(newSpan);

  newSpan.addEventListener('click', (e) => {
    e.preventDefault();

    const li = e.target.closest('li');
    const childUl = li.querySelector('ul');

    if (childUl) {
      childUl.classList.toggle('isHide');

      if (childUl.classList.contains('isHide')) {
        childUl.style.display = 'none';
      } else {
        childUl.style.display = '';
      }
    }
  });
}

allSiblings.forEach((sib) => {
  hideLi(sib);
});

allTreeChild.forEach((child) => hideLi(child));
