'use strict';

document.querySelector('ul').addEventListener('click', (e) => {
  const children = e.target.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.style.display === '') {
      child.style.setProperty('display', 'none');
    } else {
      child.style.setProperty('display', '');
    }
  }
});
