const validaLogin = document.querySelector('.validar')
console.log(validaLogin)


validaLogin.addEventListener('click', logar)

function logar() {
    
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value; 
  console.log(usuario)
  console.log(senha)

   console.log("passou aki")

   fetch(`https://mocki.io/v1/c35f8e94-3e01-4b6b-8df1-778597d5274b`)
  .then(response => response.json())  
  .then(response => { 
        
       const array = new Array(response); 

       response.forEach((usuarios) => { 
        console.log(array)
        if (usuarios.usuario == usuario && usuarios.senha == senha) {
           alert('Bem vindo(a)!', alt = "Login realizado com suceeso");
            
        } else {
           alert('Usuario ou senha incorretos!', alt = "usuario ou senha invalidos.");
        } 
        return 
      }) 

      
    
    
      
  })


  

}