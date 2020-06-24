const modalOverlay = document.querySelector('.modal-overlay')
const card = document.querySelectorAll('.card')
for (let cards of card) {
    cards.addEventListener("click", function(){
        const pageId = cards.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}
let modal = document.querySelector('.modal')
document.querySelector(".maximize-modal").addEventListener("click", function(){
    if(!modal.classList.contains('maximize')){
        modal.classList.add('maximize')
    } else {
        modal.classList.remove('maximize')
    }
})
document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove('maximize')
})
