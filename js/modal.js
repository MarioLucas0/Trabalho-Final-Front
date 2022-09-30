
const modal = document.querySelector('.modal')

console.log(modal)
function createModalFaleConosco() {

  const overlay = document.createElement('div');
  overlay.classList = 'overlay'
  modal.appendChild(overlay);

  const box = document.createElement('div');
  box.classList = 'box js-close-modal';
  box.setAttribute('data-aos',"fade-up-right")
  modal.appendChild(box)

  const img = document.createElement('img')
  img.classList = 'gif_modal'
  img.src = '/img/certinho.gif'
  img.alt = 'Card image cap'
  box.appendChild(img)

  const buttonCloseModal = document.createElement('button');
  buttonCloseModal.classList = 'close js-close'
  box.appendChild(buttonCloseModal);

  const imgCloseModal = document.createElement('img');
  imgCloseModal.src  = '../../img/close.svg';
  buttonCloseModal.appendChild(imgCloseModal)


  const divTextModal = document.createElement('div');
  divTextModal.classList = 'div_text_modal';
  box.appendChild(divTextModal)

  const h2 = document.createElement('h2');
  h2.classList = 'card_text'
  h2.textContent = 'O seu formulario foi enviado com  sucesso'
  divTextModal.appendChild(h2)

  const p = document.createElement('p')
  p.classList = 'card_text'
  p.textContent = 'Tempo de espera 48hrs'
  divTextModal.appendChild(p) 

  let html = document.querySelector('html')
  html.classList.add('show-modal')


  imgCloseModal.addEventListener('click', event => {
  event.preventDefault()
      let html = document.documentElement
      html.classList.remove('show-modal')
      while (modal.firstChild) {
          modal.removeChild(modal.firstChild);
      }
   })      
}
const button = document.querySelector('.btn-enviar')


button.addEventListener('click', event => {

  const nome = document.querySelector('#nome').value
  const email = document.querySelector('#email').value
  const numero = document.querySelector('#numero').value
  const tel = document.querySelector('#tel').value  
       
  if(nome == null || nome == "" && email == null || email == "" && numero == null || numero == "" && tel == null || tel == "") {
      alert("Erro") 
      console.log("erro")
      event.preventDefault();
     } else {
      createModalFaleConosco()
      event.preventDefault();
     } 
   
 })
