'use strict';

document.querySelectorAll('.tree li').forEach((item) => {
  if (item.children.length) {
    const spanWrap = document.createElement('span');

    spanWrap.textContent = item.firstChild.nodeValue;
    item.removeChild(item.firstChild);
    item.insertBefore(spanWrap, item.firstChild);

    spanWrap.addEventListener('click', function(e) {
      e.preventDefault();

      const subList = this.parentNode.querySelector('ul');

      // eslint-disable-next-line max-len
      subList.style.display = subList.style.display === 'none' ? 'block' : 'none';
    });
  }
});
