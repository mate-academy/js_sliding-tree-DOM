'use strict';

const rootElement = document.querySelector('.tree');

for (const li of rootElement.querySelectorAll('li')) {
  const span = document.createElement('span');

  li.prepend(span);
  span.append(span.nextSibling);
};

rootElement.addEventListener('click', function(event) {
    const ul = event.target.parentNode.querySelector('ul');

    ul.hidden = !ul.hidden;
  }
);
