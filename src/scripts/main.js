'use strict';

// write code here
const trre = document.querySelector('ul');

trre.addEventListener('click', (el) => {
  if (el.target.children[0].style.display === 'none') {
    el.target.children[0].style.display = 'block';
  } else{
    el.target.children[0].style.display = 'none';
  }
})
