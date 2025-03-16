'use strict';

const tree = document.querySelector('.tree');

const listItems = tree.querySelectorAll('li');

listItems.forEach((li) => {
  const wrapper = document.createElement('span');

  wrapper.textContent = li.firstChild.textContent;
  li.replaceChild(wrapper, li.firstChild);

  wrapper.addEventListener('click', (e) => {
    e.target.nextSibling.hidden = !e.target.nextSibling.hidden;
  });
});
