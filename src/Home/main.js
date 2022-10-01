
const produtosCard = document.querySelector('.catalogo_produtos')
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.openModal')



window.onload =  createCard;

function createCard() {

  AOS.init({
    duration: 2000,
    once: true
  })

    fetch('https://mocki.io/v1/401451ee-6f19-4d35-9ee3-d13d2772352a')
    .then(response => response.json())  
    .then(response => {


    const divCentral = document.createElement('div')
    divCentral.classList = 'central'
    produtosCard.appendChild(divCentral)
   
    for(let i = 0; i < response.length; i++) {
         
    const divProdutos = document.createElement('div')
    divProdutos.classList = 'cards  fade-right'
    divCentral.appendChild(divProdutos)

    const img = document.createElement('img')
    img.classList = 'card-img-top'
    img.src = `${response[i].img}`
    img.alt = 'Card image cap'
    divProdutos.appendChild(img)

    const divCardBody = document.createElement('div')
    divCardBody.classList = 'card-body'
    divProdutos.appendChild(divCardBody)

    const h5 = document.createElement('h5')
    h5.textContent = `${response[i].name}`
    divCardBody.appendChild(h5)


    const divBottomCard = document.createElement('div');
    divBottomCard.classList = 'bottom'
    divCardBody.appendChild(divBottomCard)


    
    const buttonOpenModal = document.createElement('button')
    buttonOpenModal.classList = 'js-open-modal openModal'
    buttonOpenModal.setAttribute('code-card', response[i].id)
    buttonOpenModal.textContent = 'VER MAIS...'
    divBottomCard.appendChild(buttonOpenModal)

   
    const carrinhoCompra = document.createElement('img')
    carrinhoCompra.classList = 'carrinho-compra'
    carrinhoCompra.src = '/img/carrinho-de-compras.svg'
    carrinhoCompra.alt = 'icone de compras'
    divBottomCard.appendChild(carrinhoCompra)

   
    }
    const openModal =  document.querySelectorAll('.openModal')
   
   
            
    

    openModal.forEach((card) => {
               /* Arrow function abaixo */
        card.addEventListener('click', () => {
          let codeCard =  card.getAttribute('code-card')
       

          fetch(`https://6333facc433198e79dcceca1.mockapi.io/api/v1/card/${codeCard}/id`)
          .then(response => response.json())  
          .then(response => { 

          console.log(response)
           console.log(response[0].id)

           const overlay = document.createElement('div');
           overlay.classList = 'overlay'
           modal.appendChild(overlay);
       
           const box = document.createElement('div');
           box.classList = 'box js-close-modal';
           box.setAttribute('data-aos',"fade-up-right")
           modal.appendChild(box)
       
           const buttonCloseModal = document.createElement('button');
           buttonCloseModal.classList = 'close js-close'
           box.appendChild(buttonCloseModal);
       
           const imgCloseModal = document.createElement('img');
           imgCloseModal.src  = '../../img/close.svg';
           buttonCloseModal.appendChild(imgCloseModal)


           const divGif = document.createElement('div');
           divGif.classList = 'caixa_gif';
           box.appendChild(divGif)

           const gif = document.createElement('img');
           gif.classList = 'gif_modal'
           gif.src  = `${response[0].gif}`;
           divGif.appendChild(gif)

           const divTextModal = document.createElement('div');
           divTextModal.classList = 'div_text_modal';
           box.appendChild(divTextModal)

           const p = document.createElement('p')
           p.classList = 'card_text'
           p.textContent = `${response[0].descricao}`
           divTextModal.appendChild(p) 

           const valor = document.createElement('p')
           valor.classList = 'card_text'
           valor.textContent = `${response[0].preco}`
           divTextModal.appendChild(valor) 


           let html = document.documentElement
           html.classList.add('show-modal')


           imgCloseModal.addEventListener('click', event => {
           event.preventDefault()
               let html = document.documentElement
               html.classList.remove('show-modal')
               while (modal.firstChild) {
                   modal.removeChild(modal.firstChild);
               }
            })      
          })
      
        })

        
      })
   

    })
}

 
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
    console.log('passou aki')
   
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();








