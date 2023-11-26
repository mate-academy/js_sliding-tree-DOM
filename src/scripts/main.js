'use strict';

const trArr = document.querySelectorAll('li');

for (const li of trArr) {
  const span = document.createElement('span');

  span.appendChild(li.firstChild);
  li.insertBefore(span, li.firstChild);

  span.addEventListener('click', (el) => {
    if (el.target.parentElement.children[1].style.display === 'none') {
      el.target.parentElement.children[1].style.display = 'block';
    } else {
      el.target.parentElement.children[1].style.display = 'none';
    }
  });
}
