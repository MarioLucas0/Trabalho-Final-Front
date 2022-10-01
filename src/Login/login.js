const validaLogin = document.querySelector('.validar')



validaLogin.addEventListener('click', (e) => {
   logar()
   e.preventDefault()
})

function logar() {
    
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value; 


   fetch(`https://mocki.io/v1/c35f8e94-3e01-4b6b-8df1-778597d5274b`)
  .then(response => response.json())  
  .then(response => { 

       var contador = 0;
       
       for(var i = 0; i < response.length; i++) { 

        console.log(response[i])
         
        if (response[i].usuario === usuario && response[i].senha === senha) {

            location.href = "../Home/index.html"; 
            contador +=  1;             
         }   
       }

       if(contador === 0) {
         alert('Usuario ou senha incorretos!', alt = "usuario ou senha invalidos.");
       }       
  })


  

}