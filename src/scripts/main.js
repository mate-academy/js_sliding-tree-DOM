'use strict';

const lis = [...document.querySelectorAll('li')];

for (const li of lis) {
  const span = document.createElement('span');

  span.innerHTML = li.childNodes[0].textContent;
  li.childNodes[0].textContent = '';
  li.insertBefore(span, li.firstChild);
}

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const childrenToHide = [...e.target.parentElement.children];

  for (const child of childrenToHide) {
    if (child.tagName === 'SPAN') {
      continue;
    }

    if (child.style.display === 'none') {
      child.style.display = '';
    } else {
      child.style.display = 'none';
    }
  }
});
