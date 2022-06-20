'use strict';

// write code here
const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', (e) => {
    e.stopPropagation();

    for (let j = 0; j < li[i].children.length; j++) {
      if (li[i].children[j].style.display === 'none') {
        li[i].children[j].style.display = 'block';
      } else {
        li[i].children[j].style.display = 'none';
      }
    }
  });
}
