
const produtosCard = document.querySelector('.catalogo_produtos')
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.openModal')



window.onload =  createCard;

function createCard() {

    fetch('https://mocki.io/v1/ccb7defb-403b-4b7e-9af8-5a4b1a6eac11')
    .then(response => response.json())  
    .then(response => {


    const divCentral = document.createElement('div')
    divCentral.classList = 'central'
    produtosCard.appendChild(divCentral)
   
    for(let i = 0; i < response.length; i++) {
        
    const divProdutos = document.createElement('div')
    divProdutos.classList = 'cards'
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
    
    const buttonOpenModal = document.createElement('button')
    buttonOpenModal.classList = 'js-open-modal openModal'
    buttonOpenModal.setAttribute('code-card', response[i].id)
    buttonOpenModal.textContent = 'VER MAIS...'
    divCardBody.appendChild(buttonOpenModal)
   
    }
    const openModal =  document.querySelectorAll('.openModal')
   // const buttonCard = document.querySelector('button')
   
            
    

    openModal.forEach((card) => {
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
       

         
         
    
          /* 
         
            const closeModal = document.querySelector('.js-close-modal')
        
            openModal.addEventListener('click', event => {
            event.preventDefault()
            console.log(openModal)
            let html = document.querySelector('html') 
            html.classList.add('show-modal')
            })
        
            const btnCloseModal = document.querySelector('.js-close')
        
            closeModal.addEventListener('mouseleave', () => {
            let html = document.documentElement
            html.classList.remove('show-modal')
            })
        
            btnCloseModal.addEventListener('click', event => {
            event.preventDefault()
            let html = document.documentElement
            html.classList.remove('show-modal')
            console.log('ok')
            }) */
           
      
        })

        
      })
   

    })
}




     







