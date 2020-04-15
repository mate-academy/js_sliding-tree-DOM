'use strict';

const ul = document.querySelector('.tree');
const li = ul.querySelectorAll('li');

for (const key of li) {
  const span = document.createElement('span');

  key.prepend(span);
  span.append(key.childNodes[1]);
}

ul.addEventListener('click', function(clickEvent) {
  const target = clickEvent.target;
  const child = target.parentNode.querySelector('ul');

  if (!child) {
    return;
  }

  if (target.tagName === 'SPAN') {
    child.hidden = !child.hidden;
  }
});
