'use strict';

const tree = document.querySelector('.tree');
const listItems = [...document.querySelectorAll('LI')];

listItems.forEach(item => {
  const span = document.createElement('SPAN');

  span.innerText = item.firstChild.textContent;
  item.firstChild.remove();
  item.insertAdjacentElement('afterbegin', span);
});

const hide = (evento) => {
  if (evento.target.children.length !== 0) {
    evento.target.nextSibling.hidden = !evento.target.nextSibling.hidden;
  }
};

tree.addEventListener('click', hide);
