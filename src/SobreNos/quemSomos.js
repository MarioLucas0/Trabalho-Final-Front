

window.onload = quemSomos
function quemSomos() {

  AOS.init({
    duration: 2500,
    once: true
  })

  const container = document.querySelector('.dados')

  fetch('https://mocki.io/v1/c3598082-6bc7-4504-a666-755c4cc6a832')
    .then(response => response.json())  
    .then(response => { 
      console.log(response)


       for(let i = 0; i < response.length; i++) {

        fetch(`${response[i].url}`)
        .then(response => response.json())  
        .then(response => {

          console.log(response)

          const divCentral = document.createElement('div')
          divCentral.classList = 'central'
          divCentral.setAttribute('data-aos',"fade-up")
          container.appendChild(divCentral)
        
          const cardPefil = document.createElement('div')
          cardPefil.classList = 'card-perfil'
          divCentral.appendChild(cardPefil) 
          
          const img = document.createElement('img')
          img.src = `${response.avatar_url}`
          cardPefil.appendChild(img)

          const h2 = document.createElement('h2')
          h2.classList = 'name'
          h2.textContent = `${response.login}`
          divCentral.appendChild(h2)

          const divBio = document.createElement('div')
          divBio.classList = 'bio'
          divCentral.appendChild(divBio)

          const textBio = document.createElement('p')
          textBio.textContent= `${response.bio}`
          divBio.appendChild(textBio)

          const divIconTwitter = document.createElement('div')
          divIconTwitter.classList = 'div-buttons'
          divCentral.appendChild(divIconTwitter) 

          const textTwitter = document.createElement('a')
          if(response.twitter_username != null) {
          textTwitter.textContent= `@${response.twitter_username}`
          textTwitter.href = `https://twitter.com/${response.twitter_username}`
         } else {
          textTwitter.textContent = `@${response.login}`
          textTwitter.href = `https://twitter.com/katyperry`
         }
          divIconTwitter.appendChild(textTwitter)

          const imgTwitter = document.createElement('img')
          imgTwitter.src = '/img/twitter.svg'
          textTwitter.appendChild(imgTwitter)

          
          const divIconGit = document.createElement('div')
          divIconGit.classList = 'div-buttons'
          divCentral.appendChild(divIconGit) 

          const textGit = document.createElement('a')
          textGit.textContent= `${response.login}`
          textGit.href = `${response.html_url}`

         divIconGit.appendChild(textGit)

          const imgGit = document.createElement('img')
          imgGit.src = '/img/github-logo.svg'
          textGit.appendChild(imgGit)

          const divIconInstagram = document.createElement('div')
          divIconInstagram.classList = 'div-buttons'
          divCentral.appendChild(divIconInstagram) 

          const textIntagram = document.createElement('a')
          if(response.blog != null && response.name != null) {
            textIntagram.textContent= `${response.name}`
            textIntagram.href = `${response.blog}`
         } else {
          textIntagram.textContent = `${response.login}`
          textIntagram.href = `https://twitter.com/katyperry`
         }
         divIconInstagram.appendChild(textIntagram)

          const imgInstagram = document.createElement('img')
          imgInstagram.src = '/img/instagram.svg'
          textIntagram.appendChild(imgInstagram)


         
         })
      
       }

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