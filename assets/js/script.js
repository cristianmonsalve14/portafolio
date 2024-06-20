$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();

    $("a").click(function(event){
        if(this.hash !=="") {
            event.preventDefault();

            var gato = this.hash
    $("html, body").animate({
        scrollTop: $(gato).offset().top
    }, 800, function(){
        window.location.hash = gato;
    });
        }
    });
});

/*navbar*/ 
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

