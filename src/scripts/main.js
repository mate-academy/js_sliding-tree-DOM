'use strict';

const allLi = document.querySelectorAll('.tree li');

allLi.forEach((li) => {
  const textNode = [...li.childNodes].find((node) => {
    return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
  });

  if (textNode) {
    const span = document.createElement('span');

    span.textContent = textNode.textContent.trim();

    textNode.replaceWith(span);
  }
});

document.addEventListener('click', menu);

function menu(e) {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const li = span.parentElement;
  const nestedUl = li.querySelector('ul');

  if (!nestedUl) {
    return;
  }
  nestedUl.hidden = !nestedUl.hidden;
}
