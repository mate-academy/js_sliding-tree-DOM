'use strict';

const arrLi = document.querySelectorAll('li');

function getTextNodes(element) {
  return Array.from(element.childNodes).filter(
    (node) => node.nodeType === 3 && node.textContent.trim().length > 1,
  );
}

function createSpan(node) {
  const span = document.createElement('span');

  node.after(span);
  span.appendChild(node);
}

for (let i = 0; i < arrLi.length; i++) {
  arrLi[i].setAttribute('id', `${i}`);

  if (arrLi[i].firstElementChild) {
    const textNodes = getTextNodes(arrLi[i]);

    createSpan(textNodes[0]);
  }
}

document.addEventListener('click', function (e) {
  const id = e.target.closest('li').id;
  const elem = document.getElementById(id).lastElementChild;

  if (!id && elem) {
    return;
  }

  elem.hidden = !elem.hidden;
});
