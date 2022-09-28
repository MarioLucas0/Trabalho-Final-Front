

window.onload = quemSomos
function quemSomos() {


  const container = document.querySelector('.dados')




  fetch('https://mocki.io/v1/c3598082-6bc7-4504-a666-755c4cc6a832')
    .then(response => response.json())  
    .then(response => { 


   
       for(let i = 0; i < response.length; i++) {

        fetch(`${response[i].url}`)
        .then(response => response.json())  
        .then(response => {


       
          
          console.log(response.avatar_url)

          const divCentral = document.createElement('div')
          divCentral.classList = 'central'
          container.appendChild(divCentral)
        
          const cardPefil = document.createElement('div')
          cardPefil.classList = 'card-perfil'
          divCentral.appendChild(cardPefil) 
          
          const img = document.createElement('img')
          img.src = `${response.avatar_url}`
          cardPefil.appendChild(img)

         
         })
      
       }

    })

}