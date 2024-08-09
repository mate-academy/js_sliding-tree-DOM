'use strict';

document.querySelectorAll('li').forEach(item => {
    if (item.childNodes.length > 1) {
        let [text, content] = [item.childNodes[0].textContent, item.childNodes[1]];
        item.innerHTML = `<span class="slider">${text}</span>`;
        item.appendChild(content);
    }
});

document.querySelectorAll('.slider').forEach(slider => {
    slider.addEventListener('click', () => {
        let sibling = slider.nextElementSibling;
        sibling.style.display = sibling.style.display === 'none' ? '' : 'none';
    });
});
