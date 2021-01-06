'use strict';

const listElements = document.querySelectorAll('li');

for (const element of [...listElements]) {
  const content = element.firstChild.textContent.trim();

  if (element.children.length !== 0) {
    element.childNodes[0].remove();
    element.insertAdjacentHTML('afterbegin', `<span>${content}</span>`);
  }

  element.onclick = (e) => {
    e.stopPropagation();
    element.children[1].hidden = !element.children[1].hidden;
  };
}
