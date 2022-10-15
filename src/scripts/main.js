'use strict';

[...document.querySelectorAll('li')]
  .filter(li => li.childElementCount > 0)
  .map(li => {
    const span = document.createElement('span');
    const text = (li.firstChild);

    li.prepend(span);
    span.append(text);
  });

document.querySelector('.tree')
  .addEventListener('click', (e) => {
    e.target.closest(':not(ul)').nextSibling.hidden
    = !e.target.closest(':not(ul)').nextSibling.hidden;
  });
