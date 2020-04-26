function openNav() {
    document.querySelector('nav').classList.add("active-nav");
}
function closeNav() {
    document.querySelector('nav').classList.remove("active-nav");
}

function carouselBar() {
    for(i=0;i<3;i++)
     {
         if(document.querySelector('feature-list-item')[i].classList == 'active-item')
         {
            document.querySelector('feature-list-item')[i].classList.remove("active-item");
         }
         else {
            document.querySelector('feature-list-item')[i].classList.add("active-item");
         }
     }
}
