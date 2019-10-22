'use strict';
document.querySelector('.tree').addEventListener('click', (myEvent) => {
  const hidable = myEvent.target.parentElement.querySelector('ul');
  if (myEvent.target.tagName !== 'SPAN') {
    return;
  }
  if (!hidable) {
    return;
  }

  hidable.hidden = !hidable.hidden;
});
