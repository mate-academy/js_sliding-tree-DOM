'use strict';

// write code here
const food = document.querySelectorAll('li');
const tree = document.querySelector('.tree');

food.forEach(dish => {
  if (dish.children[0]) {
    dish.className = 'header';

    const span = document.createElement('span');

    dish.prepend(span);
    span.textContent = dish.innerText.split('\n')[0];
    span.nextSibling.remove();
  }
});

tree.addEventListener('click', (e) => {
  let trueTarget = e.target;

  if (e.target.tagName === 'SPAN') {
    trueTarget = e.target.parentNode;
  }

  if (trueTarget.tagName === 'UL' || trueTarget.className !== 'header') {
    return;
  }

  trueTarget.children[1].hidden = !trueTarget.children[1].hidden;
});
