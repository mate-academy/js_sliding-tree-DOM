'use strict';

const changer = function(e) {
  const target = e.target;

  e.preventDefault();

  target.nextElementSibling.hidden = !target.nextElementSibling.hidden;
};

const list = document.querySelectorAll('ul');

for (let i = 0; i < list.length; i++) {
  const span = document.createElement('span');

  span.textContent = list[i].previousSibling.textContent;
  list[i].previousSibling.replaceWith(span);
  span.addEventListener('click', changer);
}
