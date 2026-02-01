'use strict';

document.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const childrenList = li.querySelector('ul');

  if (!childrenList) {
    return;
  }

  // toggle display, bardziej niezawodne niż hidden
  if (childrenList.style.display === 'none') {
    childrenList.style.display = 'block';
  } else {
    childrenList.style.display = 'none';
  }
});
