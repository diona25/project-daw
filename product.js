const filterButtons=document.querySelectorAll(".filter-buttons  a");
const filterableCards=document.querySelectorAll(".cards .card");
const filterableCat=document.querySelectorAll(".dropdown-menu a");
console.log(filterButtons,filterableCards,filterableCat);


const filterCards = e => {
document.querySelector(".active").classList.remove("active");
e.target.classList.add("active");
filterableCards.forEach(card =>{
    card.classList.add("hide");
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all"){
        card.classList.remove("hide");
    }
});

};
filterButtons.forEach(a =>a.addEventListener("click",filterCards));
filterableCat.forEach(a =>a.addEventListener("click",filterCards));