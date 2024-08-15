'use strict';

const headlines = document.querySelectorAll('.headline');

headlines.forEach((headline) => {
  headline.addEventListener('click', (e) => {
    const list = headline.nextElementSibling;

    if (list && list.tagName === 'UL') {
      if (e.target.tagName === 'SPAN') {
        const isListHidden = getComputedStyle(list).display === 'none';
        // getComputedStyle()-
        // returns an object containing all the styles applied to the element;

        if (isListHidden) {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      }
    }
  });
});
