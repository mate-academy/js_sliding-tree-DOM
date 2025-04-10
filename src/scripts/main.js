'use strict';

const listItems = document.querySelectorAll('li');

const style = document.createElement('style');

style.textContent = `
  .hidden {
    display: none;
  }
`;

document.head.append(style);

for (const list of listItems) {
  if (list.children.length !== 0) {
    const span = document.createElement('span');

    span.innerHTML = list.firstChild.textContent.trim();

    list.insertBefore(span, list.firstChild);
    list.firstChild.nextSibling.remove();

    span.addEventListener('click', function () {
      this.nextSibling.classList.toggle('hidden');
    });
  }
}
