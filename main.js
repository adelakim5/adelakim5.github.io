let content = document.getElementById('content')
let submit__btn = document.querySelector('#submit')
let article = document.querySelector('article')
let deleteAllBtn = document.querySelector('#deleteAll')

let deleteTotalItems = () => {
    let answer = confirm('정말로 모든 내용을 삭제하시겠습니까?')
    if(answer){
      article.innerHTML = ''
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

let id = 0

let upload = (item) => {
    // 쇼핑목록 아이템
    let listOne = document.createElement('div')
    listOne.setAttribute('data-id', id)
    let delBtn = document.createElement('button')
    delBtn.setAttribute('data-id', id)
    let p = document.createElement('p')
    p.textContent = item
    
    article.appendChild(listOne)
    listOne.appendChild(p)
    listOne.appendChild(delBtn)
    // 추가한 아이템으로 자동 스크롤 
    listOne.scrollIntoView({block: 'center'})
    id++
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

submit__btn.addEventListener('click', () => {
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
    content.focus()
})

article.addEventListener('click', (e)=>{
    const id = e.target.dataset.id
    if(id){
        const x = document.querySelector(`div[data-id="${id}"]`)
        x.remove()
        checkStatus()
        content.focus()
    }
})