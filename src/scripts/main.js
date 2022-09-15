'use strict';

const tree = document.getElementsByClassName('tree')[0];

function createHeader(item) {
  const span = document.createElement('span');
  const header = item.firstChild.textContent.trim();

  item.removeChild(item.childNodes[0]);
  span.innerText = header;
  item.prepend(span);

  span.addEventListener('click', () => {
    const displayValue = span.nextElementSibling.style.display;

    if (displayValue === 'none') {
      span.nextElementSibling.style.display = 'block';
    } else {
      span.nextElementSibling.style.display = 'none';
    }
  });
}

for (const child of tree.children) {
  createHeader(child);

  const innerUl = child.childNodes[1];

  for (const li of innerUl.children) {
    createHeader(li);
  }
}
