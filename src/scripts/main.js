'use strict';

const titles = Array.from(document.querySelectorAll('.title'));
const subTitles = Array.from(document.querySelectorAll('.subTitle'));

titles.forEach((title) => {
  const subling = title.nextElementSibling;

  title.addEventListener('click', 
    subling.hasAttribute('hidden')
      ? subling.removeAttribute('hidden')
      : subling.setAttribute('hidden', 'true')
  );
});

subTitles.forEach((subTitle) => {
  const subling = subTitle.nextElementSibling;

  subTitle.addEventListener('click', 
    subling.hasAttribute('hidden')
      ? subling.removeAttribute('hidden')
      : subling.setAttribute('hidden', 'true')
  );
});
