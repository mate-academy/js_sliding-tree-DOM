'use strict';

const li = document.querySelectorAll('li');
const span = document.createElement('span');

const slider = (event) => {
  const item = event.target.parentElement;

  if (item.children.length === 1) {
    return;
  }

  if (item.children[1].hidden === false) {
    item.children[1].hidden = true;
  } else {
    item.children[1].hidden = false;
  }
};

for (const element of [...li]) {
  element.prepend(span.cloneNode(true));

  const wantedSpan = element.querySelector('span');

  wantedSpan.append(element.childNodes[1]);

  wantedSpan.addEventListener('click', slider);
}
