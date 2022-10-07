'use strict';

document.querySelector('.tree').addEventListener('click', (e) => {
  if (e.target.children[0] === undefined || e.target.localName === 'ul') {
    return;
  }

  if (e.target.children[0].style.display === 'none') {
    e.target.children[0].style.display = 'block';
  } else {
    e.target.children[0].style.display = 'none';
  }
});
