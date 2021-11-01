$('.play').carousel({
    interval: 10000
  })
  
  $('.pause').carousel({
    interval: false
  })


  /* A partir de 768 de width o container do primeiro slide vira container fluid*/


  
  const mediaQuery = window.matchMedia('(max-width: 768px)')

  function mobileslidechange(e){
    let container = document.getElementById("containerslide"); 
    let container2 = document.getElementById("slidercardapio");
    let hamburgueria = document.getElementById("hamburgueriaheader");

    if (e.matches) {
    container.className = "container-fluid";
    container2.className = "container-fluid";
    hamburgueria.textContent = "American Taste";
    }
  }


mediaQuery.addListener(mobileslidechange)
mobileslidechange(mediaQuery)



/* A partir de 769 de width o container do primeiro slide é apenas container */

const mediaQuery2 = window.matchMedia('(min-width: 769px)')

function mobileslidechange2(e){
  let container = document.getElementById("containerslide");
  let container2 = document.getElementById("slidercardapio");
  let hamburgueria = document.getElementById("hamburgueriaheader");
 

  if (e.matches) {
  container.className = "container";
  container2.className = "container";
  hamburgueria.textContent = "American Taste Hamburgueria";
  }
}


mediaQuery2.addListener(mobileslidechange2)
mobileslidechange2(mediaQuery2)

/* 
const mediaQuery3 = window.matchMedia('(max-width: 576px)')

function mobileslidechange3(e){
  let container = document.getElementById("containerslide");
  let container2 = document.getElementById("slidercardapio");
 

  if (e.matches) {
  container.className = "container";
  container2.className = "container";
  }
}


mediaQuery3.addListener(mobileslidechange3)
mobileslidechange3(mediaQuery3)

 */