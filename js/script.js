//Hamburger Menu
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body'); 
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const fadeELems = document.querySelectorAll('.has-fade');
const menu = document.querySelector('.header__menu');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');
    //Close Hamburger Menu
    if (header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeELems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    //Open Hamburger Menu
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeELems.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

overlay.addEventListener('click', function(){
    console.log('close menu via clicking overlay');
    //Close menu via clicking overlay
    if (header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeELems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
})

menu.addEventListener('click', function(){
    console.log('menu closes when menu is clicked');
    //menu closes when menu is clicked
    if (header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeELems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
})

//Expand More
const btnExpand = document.querySelectorAll('#btnExpand');
const qabox = document.querySelectorAll(".qa-box");

btnExpand.forEach(element => {
    element.addEventListener('click', function(){
    console.log('expand more');

    //Arrow Up
    if(element.classList.contains('less')){
        element.classList.remove('less');
    }
    //Arrow down
    else{
        element.classList.add('less');
    }

    })
})

qabox.forEach(element => {
    element.addEventListener("click", () => {
    element.classList.toggle("active");
  })
})
