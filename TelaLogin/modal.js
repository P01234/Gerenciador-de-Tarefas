const openModalButton = document.querySelector("#cadastroButton");
const closeModalButton = document.querySelector("#closeButton");
const modal = document.getElementById("modalContainer");
//R&)lG^u2ks)^vvoFcY$d
//6_a8rdj{-F[G322P
let openModal = function(){
    openModalButton.addEventListener("click", () =>{
        modal.style.display = "flex";
    })
}
openModal()
let closeModal = function(){
    closeModalButton.addEventListener("click", () =>{
        modal.style.display = "none";
    })
}
closeModal()