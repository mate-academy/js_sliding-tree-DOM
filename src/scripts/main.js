'use strict';

const list = document.querySelector('.tree');
const elementsToSpan = [...document.querySelectorAll('li')]
  .filter(li => li.children.length > 0);

for (const element of elementsToSpan) {
  const elementContent = element.firstChild.textContent;

  element.firstChild.remove();

  element.insertAdjacentHTML('afterbegin',
    `<span>${elementContent}</span>`
  );
}

list.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'span') {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  }
});
