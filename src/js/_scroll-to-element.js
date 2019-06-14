import scrollToElement from 'scroll-to-element'

const anchorArr = [...document.querySelectorAll('.top-nav__link')]

anchorArr.forEach((anchor)=>{
  anchor.addEventListener('click',(e)=>{
    e.preventDefault()
    
    let dataAnchor = anchor.dataset.anchor 
    let target = document.getElementById(dataAnchor)

    scrollToElement(target, {
      offset: 0,
      ease: 'linear',
      duration: 1500,
    })
  })
})