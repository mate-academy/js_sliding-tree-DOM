'use strict';

const liArray = [...document.querySelectorAll('li')];
const liWithChildren = liArray.filter(li => li.children.length);
const list = document.querySelector('.tree');

for (const li of liWithChildren) {
  const span = document.createElement('span');
  const text = li.firstChild.textContent;

  li.firstChild.remove();
  li.insertBefore(span, li.firstChild);
  span.innerText = text;
}

list.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  if (e.target.nextSibling.style.display === 'none') {
    e.target.nextSibling.style.display = 'inherit';
  } else {
    e.target.nextSibling.style.display = 'none';
  }
});
