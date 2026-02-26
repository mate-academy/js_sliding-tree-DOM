document.addEventListener('click', (e) => {
  const span = e.target.closest('span');

  if (!span) {
    return;
  }

  const headline = span.closest('h1, h2, h3, h4, h5, h6');

  if (!headline) {
    return;
  }

  const nextElement = headline.nextElementSibling;

  if (nextElement) {
    nextElement.classList.toggle('hidden');
  }
});
