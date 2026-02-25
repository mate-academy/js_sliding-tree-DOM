'use strict';

const li = Array.from(document.querySelectorAll('li'));

for (const list of li) {
  const child = list.childNodes;

  for (const ch of child) {
    if (ch.nodeType === 3) {
      const span = document.createElement('span');

      span.textContent = ch.textContent.trim();
      list.removeChild(ch);

      list.prepend(span);

      span.addEventListener('click', (eve) => {
        const spanTarget = eve.target;

        if (spanTarget instanceof HTMLElement) {
          const next = list.querySelector('ul');

          if (next instanceof HTMLElement) {
            if (next.hasAttribute('hidden')) {
              next.removeAttribute('hidden');

              return;
            }
            next.setAttribute('hidden', '');
          }
        }
      });
    }
  }
}
