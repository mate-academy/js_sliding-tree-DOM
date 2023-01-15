'use strict';

// write code here
const header = document.querySelectorAll('li');
let headerTitle = '';
const arrOftitles = [];

header.forEach(el => {
  if (el.children.length > 0) {
    headerTitle = el.textContent.split(`\n`)[0];
    arrOftitles.push(headerTitle);
  }
});

for (const key of arrOftitles) {
  document.querySelector('body').innerHTML
    = document.querySelector('body').innerHTML.replaceAll(key, `
      <span class="listTitle ${key}">${key}</span>`);
}

document.querySelector('body').innerHTML
  = document.querySelector('body').innerHTML.replaceAll('<ul>', `
    <ul class="toRoll">`);

document.addEventListener('click', e => {
  if (e.target.className.includes('listTitle')) {
    const list = e.target.parentElement.querySelector('.toRoll');

    list.style.display = (list.style.display === 'none') ? 'block' : 'none';
  }
});
