




//Script da pagina contacto
function enviarContactos(){
  const pn = document.getElementById('contact-PrimNome').value
  const un = document.getElementById('contact-UltNome').value
  const email = document.getElementById('contact-email').value
  const telem= document.getElementById('contact-telem').value
  const msg = document.getElementById('contact-mensagem').value

        if(telem.length >=10 && telem.lenght <9 ){
          alert('insira um número válido')
        }
        else {
          let i = 0
          for(i; i<telem.length; i++){
              let c = telem.charAt(i)
              console.log(c)
              if(isNaN(c)){
                  alert('numero invalido')
                  break
              }       
          }
          console.log(i)
          if(i == telem.length){
              const telemInt = parseInt(telem)
              console.log(telemInt)
          }
          
        }


        if(pn == ''||un == ''||email==''|| msg=='' || telem==''){
              alert('Preencha todos os Campos!!')
        }else{
                /*let fd = new FormData()
                fd.append('PrimNome',PrimNome)
                fd.append('UltNome',UltNome)
                fd.append('Email',Email)
                fd.append('Telem',Telem)
                fd.append('Mensagem',Mensagem)
                console.log(fd)*/
                const data = {
                  PrimNome: pn,
                  UltNome: un,
                  Email: email,
                  Telem: telem,
                  Mensagem: msg
                }
                var d = JSON.stringify(data)
                console.log(d)
                var options = {
                  method:'POST',
                  headers: {
                      'Content-type' : 'application/json'
                  },
                  body: d
                }
                fetch('http://localhost:3000/contactos',options)
                .then(res => res.json())
                .then(data => alert(data.text))
                .catch((err) => {
                  console.log('Request failed', err.Mensagem)
                });

          }  
  
}








//script da pagina FAQS
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => { subAcco.classList.remove('active') });
        acco.classList.add('active');
    }
})



//Pagina
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

/*window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

} */


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;