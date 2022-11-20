'use strict';

document.querySelectorAll('li').forEach(li => {
  const text = li.childNodes[0];
  const span = document.createElement('span');

  li.replaceChild(span, text);
  span.appendChild(text);
});

document.addEventListener('click', function(e) {
  const clicked = e.target.closest('span');

  if (!clicked) {
    return;
  }

  const ul = clicked.closest('li').children[1];

  if (!ul) {
    return;
  }

  ul.hidden = !ul.hidden;
});
