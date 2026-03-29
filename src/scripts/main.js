'use strict';

const m = document.querySelectorAll('.tree li');

function spanCreate(node) {
  const pureText = node.childNodes[0];
  const newSpan = document.createElement('span');

  newSpan.textContent = pureText.textContent;
  pureText.replaceWith(newSpan);
}

for (let i = 0; i < m.length; i++) {
  if (m[i].children.length > 0) {
    spanCreate(m[i]);
  }
}

const spanList = document.querySelectorAll('span');

for (const el of spanList) {
  el.addEventListener('click', () => {
    const sibling = el.nextElementSibling;

    if (sibling) {
      if (sibling.style.display === 'none') {
        sibling.style.display = 'block';
      } else {
        sibling.style.display = 'none';
      }
    }
  });
}
