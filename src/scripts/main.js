'use strict';

addEventListener('click', e => {
  const mainList = document.querySelector('.tree');

  if (e.target.contains(mainList)) {
    return;
  }

  const value = e.target.children[0];

  if (value.style.display === 'none') {
    value.style.display = 'block';

    return;
  }

  if (value.tagName === 'UL') {
    value.style.display = 'none';
  }
});
