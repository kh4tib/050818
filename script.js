let tabs = document.querySelector(".content__navigation");
let details = document.querySelectorAll(".content__details");

tabs.addEventListener("click", function(ev){
    if(ev.target.tagName === "LI"){
        let targetTab = document.querySelector(ev.target.dataset.target)
        details.forEach(function(detail){
            if(detail === targetTab){
                detail.classList.add("active");
            } else{
                detail.classList.remove("active");
            }
        })
    }
});