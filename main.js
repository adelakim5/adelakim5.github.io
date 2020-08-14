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
    listOne.appendChild(p)
    listOne.appendChild(del)
    
    del.addEventListener("click", () => {
        let answer = confirm('정말로 삭제하시겠습니까?')
        if(answer) article.removeChild(listOne)
        checkStatus()
    })
}

function enter() {
    if (content.value === '') alert('내용을 입력해주세요.')
    else {
        upload(content.value)
        checkStatus()
        content.value = ''
        content.focus()
    }
}

btn.addEventListener('click', () => {
    if (content.value === '') alert('내용을 입력해주세요.')
    else {
        upload(content.value)
        checkStatus()
        content.value = ''
        content.focus()
    }
})

deleteAllBtn.addEventListener('click', () => {
    deleteTotalItems()
    checkStatus()
})