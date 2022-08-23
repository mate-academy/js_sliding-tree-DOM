'use strict';

const tree = document.querySelector('.tree');

for (const item of tree.children) {
  if (item.firstElementChild.nodeName === 'UL') {
    for (const value of item.firstElementChild.children) {
      const newTitleList = document.createElement('span');

      newTitleList.textContent = `${value.firstChild.nodeValue}`;
      value.firstChild.replaceWith(newTitleList);
    }
  }

  const newTitle = document.createElement('span');

  newTitle.textContent = `${item.firstChild.nodeValue}`;
  item.firstChild.replaceWith(newTitle);
}

const ul = [...document.querySelectorAll('ul')].slice(1);

ul.forEach(value => {
  value.addEventListener('click', (e) => {
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
  });
});
