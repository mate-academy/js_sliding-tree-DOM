'use strict';

const tree = document.querySelector(".tree")

tree.addEventListener("click", (event) => {
    const element = event.target

    if (element.hasChildNodes()) {
        for (const child of element.children) {
            if (child.style.display === 'none') {
                child.style.display = '';
            } else {
                child.style.display = 'none';
            }
        } 
    }
})
