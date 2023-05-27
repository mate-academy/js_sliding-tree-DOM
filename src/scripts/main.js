'use strict';

const tree = document.querySelector('.tree');
const lis = document.querySelectorAll('li');

for (const li of lis) {
  const text = li.innerHTML;
  const check = text.includes('<');
  const span = document.createElement('span');
  let textLi;

  if (check) {
    textLi = li.childNodes[0];
    span.prepend(textLi);
    li.prepend(span);
  }
}

tree.addEventListener('click', (e) => {
  const item = e.target;

  if (item.tagName === 'SPAN') {
    if (item.nextElementSibling.style.display === 'none') {
      item.nextElementSibling.style.display = 'block';
    } else {
      item.nextElementSibling.style.display = 'none';
    }
  }
});
