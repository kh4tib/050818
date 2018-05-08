let tabs = document.querySelector(".content__navigation");
let itemOne = document.querySelector(".content__navigation li:nth-child(1)")
let itemTwo = document.querySelector(".content__navigation li:nth-child(2)")
let details = document.querySelectorAll(".content__details");

tabs.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        let targetTab = document.querySelector(ev.target.dataset.target)
        details.forEach(function(detail){
            if(detail === targetTab){
                detail.classList.add("active");
                itemOne.classList.remove("active");
                itemTwo.classList.add("active");
            } else{
                detail.classList.remove("active");
                itemOne.classList.add("active");
                itemTwo.classList.remove("active");
            }
        })
    }
});