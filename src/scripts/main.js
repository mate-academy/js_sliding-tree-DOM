'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.tree li');

  for (const item of listItems) {
    const subtitles = item.querySelector('ul');

    const titleNode = item.childNodes[0];

    const span = document.createElement('span');

    if (
      titleNode.firstChild &&
      titleNode.firstChild.nodeType === Node.ELEMENT_NODE &&
      titleNode.firstChild.tagName === 'SPAN'
    ) {
      span.textContent = titleNode.firstChild.textContent;
      titleNode.replaceChild(span, titleNode.firstChild);
    } else {
      span.textContent = titleNode.textContent;

      span.style.cursor = 'pointer';

      span.style.userSelect = 'none';

      item.replaceChild(span, titleNode);

      span.addEventListener('click', (ev) => {
        ev.stopPropagation();

        const hidden = subtitles.classList.toggle('hidden');

        subtitles.style.display = hidden ? 'none' : '';
      });
    }
  }
});
