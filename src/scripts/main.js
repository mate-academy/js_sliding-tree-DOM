'use strict';

// write code here
const li = document.querySelectorAll('li');

for (const line of li) {
  const span = document.createElement('span');

  line.prepend(span);
  span.append(span.nextSibling);

  if ([...line.children].length !== 1) {
    span.innerText += ' ▼';
  }
}

const tree = document.querySelector('.tree');

tree.addEventListener('click', (ev) => {
  const el = ev.target.closest('span');

  if (el) {
    el.style.color = 'dimgrey';

    if (el.nextSibling) {
      el.nextSibling.style['color'] = 'dimgrey';
      el.nextSibling.hidden = !el.nextSibling.hidden;
    }
  }
});
