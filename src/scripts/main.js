'use strict';

const changer = function(e) {
  const target = e.target;

  e.preventDefault();

  target.nextElementSibling.hidden = !target.nextElementSibling.hidden;
};

const list = document.querySelectorAll('ul');

for (const item of list) {
  const span = document.createElement('span');

  span.textContent = item.previousSibling.textContent;
  item.previousSibling.replaceWith(span);
  span.addEventListener('click', changer);
}
