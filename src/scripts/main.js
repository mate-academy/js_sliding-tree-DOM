'use strict';

// write code here

const tree = document.querySelector('.tree')

treeRecursion([tree][0])

function treeRecursion(elem) {


  if (elem.children.length !== 0) {

    let index = elem.innerHTML.indexOf('\n')
    if (index > 0) {
      let oldString = elem.innerHTML.slice(0, elem.innerHTML.indexOf('\n'))

      let temp = `<span>${oldString}</span>`

      let oldString2 = elem.innerHTML.replace(oldString, temp)

      elem.innerHTML = oldString2

      console.log(elem.children[0].setAttribute('data-toggle-id', oldString))
      console.log(elem.children[1].setAttribute('id', oldString))

    }
            if (typeof elem.firstChild.tagName === 'LI') {

            }

    for (let i = 0; i < elem.children.length; i++) {


      treeRecursion(elem.children[i])
    }

  }

}

let li = document.getElementsByTagName('li')

let fruit = document.querySelectorAll('span')

const body = document.querySelector('body')

tree.addEventListener('click', () => {

 let id = event.target.dataset.toggleId;

 if (!id) return;

 let elem = document.getElementById(id);

elem.hidden = !elem.hidden

})



