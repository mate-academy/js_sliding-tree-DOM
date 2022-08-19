'use strict';

document.querySelectorAll('li').forEach(li => {
  if (li.firstElementChild) {
    const text = li.firstChild.textContent;

    li.firstChild.remove();

    li.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
  }
});

document.addEventListener('click', (e) => {
  const headerChild = e.target.nextSibling;

  if (headerChild) {
    headerChild.hidden = !headerChild.hidden;
  }
});
