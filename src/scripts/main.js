'use strict';

document.querySelectorAll('.tree li').forEach(item => {
  const title = item.firstChild.textContent.trim();

  const titleSpan = document.createElement('span');

  titleSpan.textContent = title;

  item.replaceChild(titleSpan, item.firstChild);

  titleSpan.addEventListener('click', () => {
    const sublist = item.querySelector('ul');

    if (sublist) {
      const ulVisibility = sublist.style.display === 'none';

      sublist.style.display = ulVisibility ? 'block' : 'none';
    }
  });
});
