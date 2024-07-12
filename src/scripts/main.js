'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function wrapHeadersWithSpan(headers) {
    headers.forEach((header) => {
      const span = document.createElement('span');

      span.textContent = header.childNodes[0].nodeValue.trim();
      header.childNodes[0].nodeValue = '';
      header.insertBefore(span, header.firstChild);

      // eslint-disable-next-line no-shadow
      span.addEventListener('click', (event) => {
        event.stopPropagation();

        const nestedList = header.querySelector('ul');

        if (nestedList) {
          nestedList.style.display =
            nestedList.style.display === 'none' ? 'block' : 'none';
        }
      });
    });
  }

  const allHeaders = document.querySelectorAll('li > ul');

  wrapHeadersWithSpan(Array.from(allHeaders).map((ul) => ul.parentElement));
});
