'use strict';

const list = document.querySelector('.tree');
const treeLi = list.querySelectorAll('li');

for (const li of treeLi) {
  if (li.children.length > 0) {
    li.firstChild.textContent = li.insertAdjacentHTML(
      'afterbegin', `<span>${li.firstChild.textContent}</span>`
    );
  }
}

list.addEventListener('click', e => {
  const children = e.target.nextElementSibling.children;

  for (const child of children) {
    child.hidden = !child.hidden;
  }
});
