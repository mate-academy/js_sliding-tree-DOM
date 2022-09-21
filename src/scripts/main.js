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
    const triggerText = item.firstChild.textContent.trim();
    const triggerMarkup = `<span class="trigger">${triggerText}</span>`;

    item.firstChild.remove();
    item.insertAdjacentHTML('afterbegin', triggerMarkup);
  }
});

tree.addEventListener('click', (e) => {
  const accordionTrigger = e.target.closest('.trigger');

  if (!accordionTrigger) {
    return;
  }

  const accordionBody = accordionTrigger.nextSibling;

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
