'use strict';

for (const li of document.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
}

document.querySelector('.tree').addEventListener('click', (ev) => {
  const target = ev.target;

  if (target.tagName !== 'SPAN') {
    return;
  }

  const ul = target.parentNode.querySelector('ul');

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
