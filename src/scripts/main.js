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
    if (event.target.nextElementSibling.nodeName === 'UL') {
      if (event.target.nextElementSibling.style.display !== 'none') {
        event.target.nextElementSibling.style.display = 'none';
      } else {
        event.target.nextElementSibling.style.display = 'block';
      }
    }
  });
}

hideList();
