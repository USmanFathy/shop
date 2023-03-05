var slideIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000); // Change ***** every * seconds
};

let search_farm= document.getElementById('search_farm');

function ser_tog(){
    search_farm.classList.toggle("Search-form-op");
};

window.addEventListener("scroll", function () {
var header = document.querySelector(".nav-ad-st-cont");
header.classList.toggle("sticky", window.scrollY > 500);
var top_buttom = document.querySelector(".btn-top");
top_buttom.classList.toggle("btn-top-block",window.scrollY > 600)
});

function scroll_now(){
    window.scrollTo({
        top: 0,
    behavior: "smooth"
    });
}



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

