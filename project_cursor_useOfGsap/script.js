const container = document.querySelector('.container')
const cursor = document.querySelector('.cursor')
const image = document.querySelector('.image')
const overlay = document.querySelector('.overlay')

container.addEventListener('mousemove' ,(move)=>{
    
    gsap.to(cursor,{
        x: move.x,
        y: move.y,
        duration:0.2,
        ease: "bounce.out"
        
    })

})

image.addEventListener('mouseenter',()=>{
    cursor.innerHTML = "view"
    gsap.to(cursor,{
        scale: 5,
        ease: "power4.out"
    })
})

image.addEventListener('mouseleave',()=>{
    cursor.innerHTML = " "
    gsap.to(cursor,{
        scale:1,
    })
})

