'use strict';

const [...list] = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
  const [...headline] = list[i].querySelectorAll('ul');

  if (headline.length) {
    const text = list[i].firstChild.textContent;

    list[i].firstChild.textContent = '';

    list[i].insertAdjacentHTML('afterbegin', `
    <span>${text}</span>`);
  }
}

const [...names] = document.querySelectorAll('span');

names.forEach(element => {
  element.addEventListener('click', () => {
    if (element.nextElementSibling.style.display === 'none') {
      element.nextElementSibling.style.display = 'block';
    } else {
      element.nextElementSibling.style.display = 'none';
    }
  });
});
