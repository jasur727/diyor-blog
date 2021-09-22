var elHeaderSection = document.querySelector('.header');
var elHeaderButton = elHeaderSection.querySelector('.button-togler');


if(elHeaderButton){
  elHeaderButton.addEventListener('click', function() {
    elHeaderSection.classList.toggle('header-open');
  })  
}