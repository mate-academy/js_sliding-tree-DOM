'use strict';

const tree = document.getElementsByClassName('tree')[0];
const headers = document.getElementsByTagName('li');

for (const li of headers) {
  if (li.firstElementChild) {
    const span = document.createElement('span');

    span.className = 'header';
    span.innerHTML = li.firstChild.textContent;
    li.firstChild.remove();

    li.prepend(span);
  }
}

tree.addEventListener('click', function (e) {
  const target = e.target.closest('span');
  const ul = Array.from(target.parentElement.children).filter(
    (x) => x.tagName === 'UL',
  )[0];

  if (!target) {
    return;
  }

  if (ul.hidden) {
    ul.hidden = false;
  } else {
    ul.hidden = true;
  }
});
