'use strict';

const tree = document.querySelector('.tree');
const li = document.querySelectorAll('li');

const liWithUL = [...li].filter((item) => item.children.length > 0);

liWithUL.forEach((element) => {
  const span = document.createElement('span');

  span.append(element.firstChild);
  element.prepend(span);
});

tree.addEventListener('click', (e) => {
  const { target } = e;

  if (target.nextElementSibling.style.display === 'none') {
    target.nextElementSibling.style.display = 'block';

    return;
  }

  if (target.tagName === 'SPAN') {
    target.nextElementSibling.style.display = 'none';
  }
});
