'use strict';

const tree = document.querySelector('.tree');
const liAll = document.querySelectorAll('li');

liAll.forEach(li => {
  const replacement = document.createElement('span');

  replacement.innerText = li.childNodes[0].nodeValue.trim();

  li.childNodes[0].nodeValue = '';
  li.prepend(replacement);
});

tree.addEventListener('click', (e) => {
  const li = e.target.closest('span');

  if (li.nextElementSibling.style.display === '') {
    li.nextElementSibling.style.display = 'none';
  } else {
    li.nextElementSibling.style.display = '';
  }
});
