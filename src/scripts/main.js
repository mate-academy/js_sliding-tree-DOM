'use strict';

const tree = document.querySelector('.tree');
const liElems = tree.querySelectorAll('li');

liElems.forEach((li) => {
  const textNode = li.childNodes[0];
  const wrapper = document.createElement('span');

  wrapper.textContent = textNode.textContent.trim();

  if (li.querySelector('ul')) {
    textNode.replaceWith(wrapper);
  }

  wrapper.addEventListener('click', (e) => {
    const clickedElem = e.target;
    const hideUl = clickedElem.parentElement.querySelector('ul');

    if (hideUl.style.display === 'none') {
      hideUl.style.display = 'block';
    } else {
      hideUl.style.display = 'none';
    }
  });
});
