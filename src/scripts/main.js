'use strict';

const mainList = document.querySelector('.tree');

mainList.addEventListener('click', (clickEvent) => {
  const enclosedList = clickEvent.target.querySelector('li > ul');

  if (enclosedList.style.display === 'none') {
    enclosedList.style.display = 'block';
  } else {
    enclosedList.style.display = 'none';
  }
});

function hover(hoverEvent) {
  if (hoverEvent.target.firstElementChild) {
    hoverEvent.target.classList.toggle('hover');
  }
}

mainList.addEventListener('mouseover', hover);
mainList.addEventListener('mouseout', hover);
