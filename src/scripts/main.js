'use strict';

// write code here
const headers = document.querySelectorAll('li:has(ul)');

for (const i of headers) {
  const withSpan = document.createElement('span');

  withSpan.append(i.firstChild);
  i.prepend(withSpan);

  withSpan.style.cursor = 'pointer';

  i.firstChild.addEventListener('click', () => {
    if (i.children[1].style.display === 'none') {
      i.children[1].style.display = '';
    } else {
      i.children[1].style.display = 'none';
    }
  });
}
