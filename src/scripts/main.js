'use strict';
document.body.style.justifyContent = 'flex-start';
document.body.style.paddingTop = '200px';

document.querySelectorAll('li').forEach((li) => {
  const span = document.createElement('span');

  span.prepend(li.firstChild);
  li.prepend(span);

  li.parentNode.style.transition = '1s';
  li.parentNode.style.overflow = 'hidden';
  span.style.userSelect = 'none';

  span.onclick = (event) => {
    event.stopPropagation();

    const ul = li.querySelector('ul');

    if (!ul) {
      return;
    }

    if (ul.style.opacity !== '0') {
      ul.style.opacity = '0';
      ul.style.transform = 'scaleY(0)';
      ul.style.maxHeight = '0';
    } else {
      ul.style.opacity = '1';
      ul.style.transform = 'none';
      ul.style.maxHeight = '';
    }
  };
});
