'use strict';

const main = document.querySelector('.tree');
const list = document.querySelectorAll('li');

for (const element of list) {
  if (element.children.length > 0) {
    const span = document.createElement('span');

    span.appendChild(element.firstChild.cloneNode(true));
    element.replaceChild(span, element.firstChild);
  }
}

main.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName === 'SPAN') {
    if (item.nextSibling.hidden === true) {
      item.nextSibling.hidden = false;
    } else {
      item.nextSibling.hidden = true;
    }
  }
});
