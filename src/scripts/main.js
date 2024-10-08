'use strict';

const lis = document.querySelectorAll('li');

for (const li of lis) {
  const product = li.firstChild;
  const span = document.createElement('span');

  span.textContent = product.textContent.trim();
  li.replaceChild(span, product);

  span.onclick = function () {
    const ul = li.querySelector('ul');

    if (ul) {
      if (ul.style.display === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    }
  };
}
