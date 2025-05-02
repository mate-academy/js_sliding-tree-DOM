'use strict';

const listItems = document.querySelectorAll('li');

listItems.forEach((li) => {
  const firstChild = li.firstChild;

  if (firstChild.nodeType === 3 && firstChild.textContent.trim() !== '') {
    const wrapper = document.createElement('span');

    wrapper.textContent = firstChild.textContent.trim();
    li.insertBefore(wrapper, firstChild);
    li.removeChild(firstChild);
  }

  const span = li.querySelector('span');

  if (span) {
    span.addEventListener('click', function (e) {
      e.stopPropagation();

      const childLis = li.querySelectorAll(':scope > ul > li');

      childLis.forEach((child) => {
        if (child.style.display === 'none') {
          child.style.display = 'list-item';
        } else {
          child.style.display = 'none';
        }
      });
    });
  }
});
