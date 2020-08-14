let content = document.getElementById('content')
let btn = document.querySelector('#submit')
let article = document.querySelector('article')
let deleteAllBtn = document.querySelector('#deleteAll')

let deleteTotalItems = () => {
    let answer = confirm('정말로 모든 내용을 삭제하시겠습니까?')
    if(answer){
        while(article.hasChildNodes()){
            article.removeChild(article.firstChild)
        }
    } 
}

let deleteItem = (x) => {
    let answer = confirm('정말로 삭제하시겠습니까?')
    if (answer) {
        let child = article.childNodes
        for (let i = 0; i < child.length; i++) {
            if (child[i].className == x) {
                article.removeChild(child[i])
                break
            }
        }
    }
}

let checkStatus = () => {
    if(article.hasChildNodes()){
        deleteAllBtn.style.visibility = 'visible'
    } else {
        deleteAllBtn.style.visibility = 'hidden'
    }
}

let upload = (one) => {
    let listOne = document.createElement('div')
    let del = document.createElement('button')
    let p = document.createElement('p')
    p.textContent = one
    article.appendChild(listOne)
    let children = article.childNodes.length
    let classNumber = children.toString()
    del.setAttribute('class', classNumber)
    del.setAttribute('onclick', 'deleteItem(' + del.className + ')')
    listOne.setAttribute('class', classNumber)
    listOne.appendChild(p)
    listOne.appendChild(del)
}

function enter() {
    if (content.value === '') alert('내용을 입력해주세요.')
    else {
        upload(content.value)
        checkStatus()
        content.value = ''
    }
}

btn.addEventListener('click', () => {
    if (content.value === '') alert('내용을 입력해주세요.')
    else {
        upload(content.value)
        checkStatus()
        content.value = ''
    }
})

deleteAllBtn.addEventListener('click', () => {
    deleteTotalItems()
    checkStatus()
})