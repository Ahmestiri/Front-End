/************************************************************************** HEADER **********************************************************************/
/** NAVBAR **/
let Prev = window.pageYOffset;
const Pos=323;
var i=0;
window.onscroll = function() {
    document.getElementById("nav").style.top = "-100px";  
    let New = window.pageYOffset;  
    if (Prev > Pos){
        document.getElementById("nav").style.animation = "slide-down .5s";   
        document.getElementById("nav").style.top = "0";   
        i++;
    }
    else if ((Prev < Pos)&&(i>0)){
        document.getElementById("nav").style.animation = "slide-up .5s"; 
        document.getElementById("nav").style.top = "-100px";
    }
    Prev = New;
}

/************************************************************************** SWIPER **********************************************************************/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetweenSlides: 30,
        },
        // when window width is <= 999px
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
        }
    }
});

