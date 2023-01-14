'use strict';

const liArray = [...document.querySelectorAll('li')];
const liWithChildren = liArray.filter(li => li.children.length !== 0);
const list = document.querySelector('.tree');

for (const li of liWithChildren) {
  const span = document.createElement('span');

  span.innerText = li.firstChild.data;
  li.firstChild.replaceWith(span);
}

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
