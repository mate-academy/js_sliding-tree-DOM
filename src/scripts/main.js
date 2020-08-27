'use strict';

function hideList() {
  function spanWrapper(elementSelector) {
    [...document.querySelectorAll(elementSelector)].forEach(li => {
      const text = li.firstChild.textContent.trim();

      li.firstChild.textContent = '';
      li.insertAdjacentHTML('afterbegin', `<span>${text}</span>`);
    });
  }

  spanWrapper('li');

  document.querySelector('.tree').addEventListener('click', (event) => {
    if (event.target.nextSibling.nextSibling.nodeName === 'UL') {
      if (event.target.nextSibling.nextSibling.style.display !== 'none') {
        event.target.nextSibling.nextSibling.style.display = 'none';
      } else {
        event.target.nextSibling.nextSibling.style.display = 'block';
      }
    }
  });
}

hideList();
