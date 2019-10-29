'use strict';

const tree = document.querySelector('.tree');
tree.addEventListener('click', hideAndShow);

function hideAndShow(e) {
  const etc = e.target.className;
  if (etc !== 'bold') {
    return;
  }

  const hide = e.target.nextElementSibling;

  if (hide.style.display === 'none') {
    hide.style.display = 'block';
  } else {
    hide.style.display = 'none';
  }
}
