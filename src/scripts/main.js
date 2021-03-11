'use strict';

const list = document.querySelector('.tree');
const elementsToSpan = [...document.querySelectorAll('li')]
  .filter(li => li.children.length > 0);

for (const element of elementsToSpan) {
  const elementContent = element.firstChild.textContent;

  element.firstChild.replaceWith(document.createElement('span'));
  element.firstChild.textContent = elementContent;
  element.firstChild.classList.add('span');
}

list.addEventListener('click', (e) => {
  if (e.target.closest('.span')) {
    const innerList = e.target.nextElementSibling;

    innerList.hidden = !innerList.hidden;
  }
});
