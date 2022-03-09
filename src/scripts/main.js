'use strict';

const li = document.querySelectorAll('li');

const arr = [...li];

const names = arr.map(x => x.firstChild.textContent);

for (let i = 0; i < arr.length; i++) {
  arr[i].firstChild.textContent = '';
  arr[i].insertAdjacentHTML('afterbegin', `<span>${names[i]}</span>`);
};

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const click = e.target.closest('li');

    if (!click || !click.querySelector('ul')) {
      return;
    };

    if (click.querySelector('ul').hidden === false) {
      click.querySelector('ul').hidden = true;
    } else {
      click.querySelector('ul').hidden = false;
    };
  };
});
