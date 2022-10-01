const validaLogin = document.querySelector('.validar')
console.log(validaLogin)


validaLogin.addEventListener('click', logar)

function logar() {
    
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value; 


   fetch(`https://mocki.io/v1/c35f8e94-3e01-4b6b-8df1-778597d5274b`)
  .then(response => response.json())  
  .then(response => { 
  
       response.forEach((usuarios) => {

         if (usuarios.usuario === usuario && usuarios.senha === senha) {

            alert('Bem vindo(a)!', alt = "Login realizado com suceeso");
            location.href = "../Home/index.html";
            ctx.beginPath()
         
            
         } else {
            alert('Usuario ou senha incorretos!', alt = "usuario ou senha invalidos.");
            ctx.beginPath()  
         } 
      }) 
       
  })


  

}