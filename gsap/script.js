let inital = `M 20 80 Q 200 80 1350 80`

let final = `M 20 80 Q 200 80 1350 80`


const string = document.querySelector('.string')
string.addEventListener('mousemove',(dets)=>{
    inital = `M 20 80 Q ${dets.x} ${dets.y} 1350 80`
    console.log(dets.y)
    gsap.to('svg path',{
        attr:{d:inital},
        duration: 0.1,
        ease:'power.out'
    })
})

string.addEventListener('mouseleave',()=>{
    final = `M 20 80 Q 200 80 1350 80`
    gsap.to('svg path',{
        attr:{d:final},
        duration:1.5,
        ease:'elastic.out(1,0.2)'
    })
})