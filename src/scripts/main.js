'use strict';

const ulMain = document.querySelector('.tree');

for (const li of ulMain.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.prepend(span.nextSibling);
}

ulMain.addEventListener('click', function(ev) {
  const spanElement = ev.target.closest('span');

  if (!spanElement) {
    return;
  }

  const hiddenTar = ev.target.parentNode.querySelector('ul');

  if (!hiddenTar) {
    return;
  }
  hiddenTar.hidden = !hiddenTar.hidden;
});
