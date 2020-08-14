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
    deleteAllBtn.style.visibility = 'hidden' 
}

let checkStatus = () => {
    if(article.hasChildNodes()){
        deleteAllBtn.style.visibility = 'visible'
    } else {
        deleteAllBtn.style.visibility = 'hidden'
    }
}

let upload = (item) => {
    // 쇼핑목록 아이템
    let listOne = document.createElement('div')
    let delBtn = document.createElement('button')
    let p = document.createElement('p')
    p.textContent = item
    
    article.appendChild(listOne)
    listOne.appendChild(p)
    listOne.appendChild(delBtn)
    // 추가한 아이템으로 자동 스크롤 
    listOne.scrollIntoView({block: 'center'})
    
    delBtn.addEventListener("click", () => {
        let answer = confirm('정말로 삭제하시겠습니까?')
        if(answer) article.removeChild(listOne)
        // 전체삭제 휴지통을 보여주기 위해 || 지우기 위해 
        checkStatus()
    })
}

function enter() {
    if (content.value === '') alert('내용을 입력해주세요.')
    else {
        upload(content.value)
        // 전체삭제 휴지통을 보여주기 위해 || 지우기 위해 
        checkStatus()
        content.value = ''
        content.focus()
    }
}

btn.addEventListener('click', () => {
    if (content.value === '') alert('내용을 입력해주세요.')
    else {
        upload(content.value)
        // 전체삭제 휴지통을 보여주기 위해 || 지우기 위해 
        checkStatus()
        content.value = ''
        content.focus()
    }
})

deleteAllBtn.addEventListener('click', () => {
    deleteTotalItems()
})