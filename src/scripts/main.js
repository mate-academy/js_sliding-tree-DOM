'use strict';

const changer = function(e) {
  const target = e.target;

  e.preventDefault();

  if (target.nextElementSibling.style.display !== 'none') {
    target.nextElementSibling.style.display = 'none';
  } else {
    target.nextElementSibling.style.display = 'block';
  }
};

const list = document.querySelectorAll('ul');

for (let i = 0; i < list.length; i++) {
  const span = document.createElement('span');

  span.textContent = list[i].previousSibling.textContent;
  list[i].previousSibling.replaceWith(span);
  span.addEventListener('click', changer);
}
