const addTaskButton = document.querySelector("#plusIconButton");
const modal = document.getElementById("modal");
const closeButton = document.querySelector("#closeButton");

let showModal = function()  {
    addTaskButton.addEventListener("click", () =>{
        modal.style.display = "flex";
    })
    return checkCloseButton();
}
let checkCloseButton = function()   {
    closeButton.addEventListener("click", () =>{
        modal.style.display = "none";
    })
}
showModal();