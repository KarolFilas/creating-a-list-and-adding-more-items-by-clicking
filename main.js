const btn = document.createElement("button")
btn.textContent = 'Stwórz listę'
document.body.appendChild(btn);

const ul = document.createElement("ul")
document.body.appendChild(ul);

let index = -1
let size = 5


const itemsList = function () {

    for (let i = 0; i < 10; i++) {
        index += 1
        size += 1

        let li = document.createElement('li')
        li.textContent = `Element listy numer ${index}`
        ul.appendChild(li)
        li.style.fontSize = size + 'px'
    }
}

btn.addEventListener('click', itemsList)