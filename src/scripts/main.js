'use strict';

// write code here
const tree = document.querySelector('.tree');
const treeItems = [...tree.querySelectorAll('li')];
const animationSettings = {
  duration: 500,
  easing: 'ease',
};
let accordionOpened = true;

treeItems.forEach(item => {
  if (item.children.length) {
    const trigerText = item.firstChild.textContent.trim();
    const trigerMarkup = `<span class="triger">${trigerText}</span>`;

    item.firstChild.remove();
    item.insertAdjacentHTML('afterbegin', trigerMarkup);
  }
});

tree.addEventListener('click', (e) => {
  const accordionTriger = e.target.closest('.triger');

  if (!accordionTriger) {
    return;
  }

  const accordionBody = accordionTriger.nextSibling;

  if (accordionOpened) {
    accardionClose(accordionBody, animationSettings);
    accordionOpened = false;
  } else {
    accardionOpen(accordionBody, animationSettings);
    accordionOpened = true;
  }
});

const accardionClose = (body, animSettings) => {
  body.style.height = body.clientHeight + 'px';
  body.style.overflow = 'hidden';

  const animimation = body.animate([{
    height: 0 + 'px',
  }], animSettings);

  animimation.addEventListener('finish', () => {
    body.style.height = '0px';
  });
};

const accardionOpen = (body, animSettings) => {
  const animimation = body.animate([{
    height: body.scrollHeight + 'px',
  }], animSettings);

  animimation.addEventListener('finish', () => {
    body.style.height = null;
  });
};
