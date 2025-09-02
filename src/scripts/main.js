'use strict';

document.querySelectorAll('.tree li').forEach((li) => {
  const firstLi = li.firstChild;

  if (firstLi && firstLi.nodeType === Node.TEXT_NODE) {
    const spAn = document.createElement('span');

    spAn.textContent = firstLi.textContent.trim();
    li.replaceChild(spAn, firstLi);
  }
});

document.querySelectorAll('.tree span').forEach((span) => {
  span.addEventListener('click', () => {
    const nexT = span.nextElementSibling;

    if (nexT) {
      nexT.hidden = !nexT.hidden;
    }
  });
});
