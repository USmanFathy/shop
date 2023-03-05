let best_s = document.querySelectorAll("#Best_seller");

let top_s = document.querySelectorAll("#Top_featured");

let all_btn = document.getElementById("all_btn");

let top_btn = document.getElementById("top_btn");

let best_btn = document.getElementById("best_btn");



function best_only(eo){
best_s.forEach((best_op)=>{
    best_op.classList.add("dis-block");

    best_op.classList.remove("dis-none");

});
top_s.forEach((top_cl)=>{
    top_cl.classList.add("dis-none");
    
    top_cl.classList.remove("dis-block");

})

best_btn.classList.add("is-click");

all_btn.classList.remove("is-click");

top_btn.classList.remove("is-click");



};


function top_only(eo){
best_s.forEach((best_op)=>{
    best_op.classList.remove("dis-block");

    best_op.classList.add("dis-none");

});
top_s.forEach((top_cl)=>{
    top_cl.classList.remove("dis-none");
    
    top_cl.classList.add("dis-block");

})


best_btn.classList.remove("is-click");

all_btn.classList.remove("is-click");

top_btn.classList.add("is-click");


};






function all_only(eo){
best_s.forEach((best_op)=>{
    best_op.classList.add("dis-block");

    best_op.classList.remove("dis-none");

});
top_s.forEach((top_cl)=>{
    top_cl.classList.add("dis-block");

    top_cl.classList.remove("dis-none");

})


best_btn.classList.remove("is-click");

all_btn.classList.add("is-click");

top_btn.classList.remove("is-click");

};

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    responsive: {
        0: {
            items: 1,
            

        },
        
        600: {
            items: 2
        }
        ,
        
        400: {
            items: 2
        }
        ,
        
        300: {
            items: 1
        }
        ,
        
        1000: {
            items: 5
        }
    }
})

