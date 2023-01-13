'use strict';

const liArray = [...document.querySelectorAll('li')];
const liWithChildren = liArray.filter(li => li.children.length);
const list = document.querySelector('.tree');

for (const li of liWithChildren) {
  const span = document.createElement('span');

  li.insertBefore(span, li.firstElementChild);
  span.innerText = li.firstChild.data;
  li.firstChild.remove();
}

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
});
