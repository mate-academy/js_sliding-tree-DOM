'use strict';

const fruitList = document.querySelector('.tree');
const li = document.querySelectorAll('li');

fruitList.style.position = 'absolute';
fruitList.style.top = fruitList.getBoundingClientRect().top + 'px';
fruitList.style.left = fruitList.getBoundingClientRect().left + 'px';

[...li].map(item => {
  const span = document.createElement('span');

  span.setAttribute('class', 'title');
  item.prepend(span);
  span.append(span.nextSibling);
});

fruitList.addEventListener('click', (event) => {
  const item = event.target.nextElementSibling;

  if (item.nodeName === 'UL') {
    item.hidden = !item.hidden;
  }
});
